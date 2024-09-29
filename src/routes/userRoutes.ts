import express from 'express';
import { registerUser } from '../controlers/userControler';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

export default router;
