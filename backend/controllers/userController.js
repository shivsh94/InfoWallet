import User from "../models/userSchema.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }



    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({success:true , message: "User registered successfully" });




  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
