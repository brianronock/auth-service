import { config } from "dotenv";

config();

export const configure = {
    port: process.env.PORT || 5003,
    // db: {
    //     host: process.env.DB_HOST || "localhost",
    //     user: process.env.DB_USER || "root",
    //     password: process.env.DB_PASSWORD || "",
    //     database: process.env.DB_NAME || "test",
    // },
    //mongoUri: process.env.LOCAL_MONGO_URI || "mongodb://localhost:27017/test",
    mongoUri: process.env.DOCKER_MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV || "development",
};