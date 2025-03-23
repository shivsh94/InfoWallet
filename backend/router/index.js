import express from 'express';
import { login, logout, register } from '../controllers/userController.js';
import { createCollection } from '../controllers/uploadController.js';
import isAuthenticated from '../middleware/authencation.js';
import { upload } from '../utils/multer.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post("/upload", upload.single("image"),createCollection);

export default router;