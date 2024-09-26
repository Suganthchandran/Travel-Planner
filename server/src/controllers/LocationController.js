import { v2 as cloudinary } from 'cloudinary';
import locationModel from '../models/LocationModel.js';
import mongoose from 'mongoose';

const addLocation = async (req, res) => {
    try {
        const { name, desc } = req.body;

        if (!name || !desc) {
            return res.status(400).json({ success: false, message: 'Name and description are required' });
        }
        if (!req.file || !req.file.path) {
            return res.status(400).json({ success: false, message: 'Image file is required' });
        }

        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });

        const locationData = {
            name,
            desc,
            image: imageUpload.secure_url,
        };

        const location = new locationModel(locationData);
        await location.save();

        res.json({ success: true, message: 'Location Added' });
    } catch (error) {
        console.error('Error adding location:', error);
        res.status(500).json({ success: false, message: 'Error adding location' });
    }
};

const listLocations = async (req, res) => {
    try {
        const locations = await locationModel.find({});
        res.json({ success: true, locations });
    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).json({ success: false, message: 'Error fetching locations' });
    }
};

const findByIdLocation = async (req, res) => {
    try {
        const location = await locationModel.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ success: false, message: 'Location not found' });
        }
        res.json({ success: true, location });
    } catch (error) {
        console.error('Error finding location by ID:', error);
        res.status(500).json({ success: false, message: 'Error finding location' });
    }
};

const removeLocation = async (req, res) => {
    try {
        await locationModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Location Deleted' });
    } catch (error) {
        console.error('Error deleting location:', error);
        res.status(500).json({ success: false, message: 'Error deleting location' });
    }
};

const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid location ID' });
        }

        const { name, desc } = req.body;
        if (!name || !desc) {
            return res.status(400).json({ success: false, message: 'Name and description are required' });
        }

        const existingLocation = await locationModel.findById(id);
        if (!existingLocation) {
            return res.status(404).json({ success: false, message: 'Location not found' });
        }

        let imageUpload;
        if (req.file && req.file.path) {
            const imageFile = req.file;
            imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        } else {
            imageUpload = { secure_url: existingLocation.image };
        }

        const updatedLocationData = {
            name,
            desc,
            image: imageUpload.secure_url,
        };

        await locationModel.findByIdAndUpdate(id, updatedLocationData, { new: true });
        
        res.json({ success: true, message: 'Location Updated' });
    } catch (error) {
        console.error('Error updating location:', error);
        res.status(500).json({ success: false, message: 'Error updating location' });
    }
};

export { addLocation, listLocations, removeLocation, updateLocation, findByIdLocation };
