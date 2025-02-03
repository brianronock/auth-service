import pkg from "jsonwebtoken";
import { configure } from "../config/config.js";

const { sign } = pkg;

export const generateToken = (payload) => {
    return sign({ payload }, configure.jwtSecret, { expiresIn: "30d" });
}