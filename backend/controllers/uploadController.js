import File from "../models/fileSchema.js"; // Import the model
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createCollection = async (req, res) => {
  try {
    const { name, title, description, price } = req.body;
    
    // Validate required fields
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    if (!name || !title || !description || !price)
      return res.status(400).json({ message: "Please fill in all fields" });

    if (isNaN(price)) return res.status(400).json({ message: "Price must be a number" });

    // Upload file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" }, 
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(req.file.buffer); 
    });

  
    const newFile = new File({
      name,
      title,
      description,
      price,
      image: result.secure_url,  
    });

    await newFile.save();

    res.status(201).json({
      message: "File uploaded and saved successfully",
      data: newFile,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};
