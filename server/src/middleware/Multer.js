import multer from 'multer';
import path from 'path';

// Define the storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Create the upload middleware
const upload = multer({ storage });

export default upload;
