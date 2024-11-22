import { v2 as cloudinary } from 'cloudinary';
import favouriteModel from '../models/FavouriteModel.js';

export const addFavourite = async (req, res) => {
    try {
        const { userId, itemId, name, place, image, type} = req.body;

        if (!userId || !itemId || !name || !place || !image || !type) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newFavourite = new favouriteModel({
            userId,
            itemId,
            name,
            place,
            image,
            type
        });

        console.log("new Favourite", newFavourite);

        await newFavourite.save();

        res.status(200).json({
            success: true,
            message: "Added to Favourite",
            newFavourite
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding the Favourite", 
            error: error.message  // Send the error message to the client for debugging
        });
    }
};


export const removeFavourite = async (req,res) => {
    try {
        const {id} = req.body;
        const favourite = await favouriteModel.findByIdAndDelete(id)

        if(!favourite) {
            return res.json({
                success: false,
                message: "Favourite Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: 'Favourite Delete'
        })
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message: "Error to Delete the Favourite", error: error.message

        })
    }
}

export const listFavourite = async (req,res) => {
    try {
        const favourite = await favouriteModel.find();
        res.status(201).json({
            success: true,
            favourite: favourite
        })
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message: "Error to Fetch all Favourites", error: error.message

        })
    }
}