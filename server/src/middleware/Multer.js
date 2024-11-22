import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

// Use Cloudinary storage instead of local disk storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        format: async (req, file) => path.extname(file.originalname).slice(1), // Automatically determine file format
        public_id: (req, file) => Date.now() + '-' + file.originalname // Generate a unique filename
    }
});

// Create the upload middleware using Cloudinary storage
const upload = multer({ storage });

export default upload;
