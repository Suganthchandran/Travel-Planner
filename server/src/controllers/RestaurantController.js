import { v2 as cloudinary } from 'cloudinary';
import RestaurantModel from '../models/RestaurantModel.js';

export const addRestaurant = async (req,res) => {
    try {
        console.log("Inside Controller");
        const { place, name, special_food, working_time, rating, coordinates, desc, menu } = req.body;


        const image = req.files.image && req.files.image[0]

        const imagesUrl = (await cloudinary.uploader.upload(image.path, {resource_type:'image'})).secure_url;

        const menuImage = req.files.menuImage && req.files.menuImage[0]

        const menuImagesUrl = (await cloudinary.uploader.upload(menuImage.path, {resource_type:'image'})).secure_url;

        const Coverimage1 = req.files.Coverimage1 && req.files.Coverimage1[0]
        const Coverimage2 = req.files.Coverimage2 && req.files.Coverimage2[0]
        const Coverimage3 = req.files.Coverimage3 && req.files.Coverimage3[0]
        const Coverimage4 = req.files.Coverimage4 && req.files.Coverimage4[0]

        const Coverimages = [Coverimage1,Coverimage2,Coverimage3,Coverimage4].filter((item)=> item !== undefined )

        const CoverimagesUrl = await Promise.all(
            Coverimages.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url
            })
        )

        const SmallImage1 = req.files.SmallImage1 && req.files.SmallImage1[0]
        const SmallImage2 = req.files.SmallImage2 && req.files.SmallImage2[0]
        const SmallImage3 = req.files.SmallImage3 && req.files.SmallImage3[0]
        const SmallImage4 = req.files.SmallImage4 && req.files.SmallImage4[0]
        const SmallImage5 = req.files.SmallImage5 && req.files.SmallImage5[0]
        const SmallImage6 = req.files.SmallImage6 && req.files.SmallImage6[0]
        const SmallImage7 = req.files.SmallImage7 && req.files.SmallImage7[0]
        const SmallImage8 = req.files.SmallImage8 && req.files.SmallImage8[0]
        const SmallImage9 = req.files.SmallImage9 && req.files.SmallImage9[0]

        const SmallImages = [SmallImage1,SmallImage2,SmallImage3,SmallImage4,SmallImage5,SmallImage6,SmallImage7,SmallImage8,SmallImage9].filter((item)=> item !== undefined )

        const SmallImagesUrl = await Promise.all(
            SmallImages.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url
            })
        )

        const newRestaurant = new RestaurantModel({
            place,
            name,
            working_time,
            special_food,
            rating,
            desc,
            coordinates: JSON.parse(coordinates),
            coverImages: CoverimagesUrl,
            smallImages: SmallImagesUrl,
            image: imagesUrl,
            menuImage: menuImagesUrl,
            menu: JSON.parse(menu)
        });

        await newRestaurant.save();
        res.status(201).json({
            success: true,
            message: 'Restaurant Added Successfully',
            newRestaurant
        });
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message: 'Error Adding Restaurant ', error: error.message
        })
    }
}

export const removeRestaurant = () => {
    
}

export const listRestaurant = async (req,res) => {
    try {
        const list = await RestaurantModel.find();
        res.status(201).json({
            success: true,
            message: 'Restaurant Listing Successfully',
            restaurants: list,
        });
      } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error Listing Restaurant ', error: error.message
        })
      }

    }

export const updateRestaurant = async (req,res) => {
   
}

export const findByIdRestaurant = async (req,res) => {
    try {
        const restaurant = await RestaurantModel.findById(req.params.id);
        if (!restaurant) {
          return res.status(404).json({
            success: false,
            message: 'Restaurant Not Found ',
        })
        }
        res.status(200).json({
            success: true,
            message: 'Restaurant Fetching Successfully',
            restaurant: restaurant,
        });
      } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error Fetching Restaurant ', error: error.message
        })
      }
}