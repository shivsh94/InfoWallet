import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userSchema.js";  
dotenv.config();

const isAuthenticated = async (req, res, next) => {
  try {
     
    const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
     
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }  
    req.user = user;

    
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export default isAuthenticated;
