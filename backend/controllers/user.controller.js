import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// register user : /api/user/register

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // You might want to save the user here, e.g., await newUser.save();
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
