import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/config/configDB.js';
import connectCloudinary from './src/config/Cloudinary.js';
import locationRouter from './src/routes/LocationRouter.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api/location', locationRouter);

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
