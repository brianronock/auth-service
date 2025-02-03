import User from "../models/User.js";
import { registerSchema, loginSchema } from "../validators/authValidator.js";
import { generateToken } from "../utils/jwtHelper.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Register User
// @route   POST /api/auth/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }

    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(409);
        throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });
    const token = generateToken({ id: user._id });

    res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: token,
    });
});

// @desc    Login User
// @route   POST /api/auth/login
// @access  Public
// export const loginUser = asyncHandler(async (req, res) => {
//     const { error } = loginSchema.validate(req.body);
//     if (error) {
//         res.status(400);
//         throw new Error(error.details[0].message);
//     }

//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//         res.status(401);
//         throw new Error("Invalid login credentials");
//     }

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//         res.status(401);
//         throw new Error("Invalid login credentials");
//     }

//     const token = generateToken({ id: user._id });

//     res.status(200).json({
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         token: token,
//     });
// });

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //console.log("🔹 Login Attempt:", { email, password });

    const { error } = loginSchema.validate(req.body);
    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }

    const user = await User.findOne({ email });
    //console.log("🔹 User Found in DB:", user);

    if (!user) {
        res.status(401);
        throw new Error("Invalid login credentials");
    }

    const isMatch = await user.matchPassword(password);
    //console.log("🔹 Password Match Result:", isMatch);

    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid login credentials");
    }

    const token = generateToken({ id: user._id });
    //console.log("🔹 Generated Token:", token);

    res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token,
    });
});