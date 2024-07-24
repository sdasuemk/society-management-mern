import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import crypto from "crypto";
import dotenv from "dotenv";
import { errorHandler } from "../utils/error/error.js";

dotenv.config();

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password, name, phone } = req.body;
    const [isUsernameExist, isEmailExist, isPhoneExist] = await Promise.all([
      User.findOne({ username: username }),
      User.findOne({ email: email }),
      User.findOne({ phone: phone }),
    ]);
    if (isUsernameExist)
      return next(errorHandler(400, "Username already exists"));

    if (isEmailExist) return next(errorHandler(400, "Email already exists"));

    if (isPhoneExist) return next(errorHandler(400, "Phone already exists"));

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      username,
      email,
      name,
      phone,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return next(404, "User not found!");

    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if (!isValidPassword) return next(401, "Wrong credentials!");

    // Generate a secure random JWT secret
    // const jwtSecret = crypto.randomBytes(64).toString("hex");
    const jwtSecret = process.env.JWT_SECRET;

    const token = jwt.sign({ data: existingUser._id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000, // (1 hour)
    });

    res.status(200).json({ message: "Valid user" });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Token has been cleared" });
  } catch (error) {
    next(error);
  }
};
