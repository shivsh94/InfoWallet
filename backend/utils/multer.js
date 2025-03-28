import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/", // Folder where files will be saved
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });
