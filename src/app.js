import express, { json } from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

// Connect to the database
connectDB();

// Initialize the express app
const app = express();
app.use(cors());
//app.use(json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the routes
app.use('/api/auth', authRoutes);

// Global errorHandler
app.use(errorHandler)

export default app;