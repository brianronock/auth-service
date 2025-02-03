import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login an existing user
router.post('/login', loginUser);

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Test route working' })
})

export default router;