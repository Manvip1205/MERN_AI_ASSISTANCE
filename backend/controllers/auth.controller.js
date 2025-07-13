import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwtToken.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = generateToken(user._id); // ✅ fixed

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000, // ✅ fixed spelling
            sameSite: "strict",
            secure: false,
        });

        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Please try again later" });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found. Please sign up." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = generateToken(user._id); // ✅ fixed

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
        });

        return res.status(200).json({ message: "Welcome!" });
    } catch (error) {
        return res.status(500).json({ message: "Sorry, something went wrong" });
    }
};

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};
