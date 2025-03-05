import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hassedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ name, email, password: hassedPassword });

    const token= jwt.sign({email:user.email}, process.env.JWT_SECRET, {expiresIn: "1h"});
    console.log(token);
    res.cookie("token", token, {
        httpOnly:true,
        max:3600,   
    });

    res.status(201).json({success:true , message: "User registered successfully" ,user, token});

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
