import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import File from "../models/fileSchema.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createCollection = async (req, res) => {
  try {
    const { name, title, description, price } = req.body;

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    if (!name || !title || !description || !price) 
      return res.status(400).json({ message: "Please fill in all fields" });
    if (isNaN(price)) 
      return res.status(400).json({ message: "Price must be a number" });

    const isImage = req.file.mimetype.startsWith("image/");
    const resourceType = isImage ? "image" : "raw";

    console.log(`Uploading file (${resourceType}): ${req.file.filename}`);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "uploads",
          resource_type: "auto",
          access_mode: "public",
          flags: "attachment:false", // Prevent download
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error);
          }
          resolve(result);
        }
      );

      const fileStream = fs.createReadStream(req.file.path);
      fileStream.pipe(stream);
    });

    // Modify URL to force inline display instead of download
    const pdfUrl = result.secure_url.replace("/upload/", "/upload/fl_attachment:false/");

    console.log("Upload successful:", pdfUrl);

    const newFile = new File({
      name,
      title,
      description,
      price,
      image: pdfUrl, // Store the modified URL
    });

    await newFile.save();

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete file:", err);
    });

    res.status(201).json({
      message: "File uploaded and saved successfully",
      data: newFile,
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
