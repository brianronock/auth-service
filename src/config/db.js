import mongoose from "mongoose";
import { configure } from "./config.js";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(configure.mongoUri);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed: ${error.message}");
        process.exit(1);
    }
}

export default connectDB;