import { v2 as cloudinary } from 'cloudinary';
import PlacesModel from '../models/PlacesModel.js';

  export const addPlace = async (req, res) => {
    try {
      const { id, place, name, ticket, bestTime, schedule, rating, coordinates, desc } = req.body;

        const image = req.files.image && req.files.image[0]

        const imagesUrl = (await cloudinary.uploader.upload(image.path, {resource_type:'image'})).secure_url;

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
  
      const newPlace = new PlacesModel({
        id,
        place,
        name,
        ticket,
        bestTime: bestTime.split(','),
        schedule: JSON.parse(schedule),
        rating,
        coordinates: JSON.parse(coordinates),
        image : imagesUrl,
        coverImages : CoverimagesUrl,
        smallImages : SmallImagesUrl,
        desc,
      });
  
      await newPlace.save();
      res.status(201).json({ message: 'Place added successfully', newPlace });
    } catch (error) {
      res.status(500).json({ message: 'Error adding place', error: error.message });
    }
  };
  
  // List Places
  export const listPlaces = async (req, res) => {
    try {
      const places = await PlacesModel.find();
      res.status(200).json({success:true, place:places});
    } catch (error) {
      res.status(500).json({ message: 'Error fetching places', error: error.message });
    }
  };
  
  // Find Place by ID
  export const findByIdPlace = async (req, res) => {
    try {
      const place = await PlacesModel.findById(req.params.id);
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.status(200).json({success:true, placee:place});
    } catch (error) {
      res.status(500).json({ message: 'Error finding place', error: error.message });
    }
  };
  
  // Update Place
  export const updatePlace = async (req, res) => {
    try {
      const { id } = req.params;
      const place = await PlacesModel.findById(id);
  
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
  
      const updatedPlace = {
        ...place._doc, // Preserve existing data
        ...req.body, // Override with incoming data
      };
  
      if (req.files.coverImg1) updatedPlace.coverImages.img1 = await uploadImageToCloudinary(req.files.coverImg1[0].buffer);
      if (req.files.coverImg2) updatedPlace.coverImages.img2 = await uploadImageToCloudinary(req.files.coverImg2[0].buffer);
      if (req.files.coverImg3) updatedPlace.coverImages.img3 = await uploadImageToCloudinary(req.files.coverImg3[0].buffer);
      if (req.files.coverImg4) updatedPlace.coverImages.img4 = await uploadImageToCloudinary(req.files.coverImg4[0].buffer);
  
      if (req.files.smallImg1) updatedPlace.smallImages.img1 = await uploadImageToCloudinary(req.files.smallImg1[0].buffer);
      if (req.files.smallImg2) updatedPlace.smallImages.img2 = await uploadImageToCloudinary(req.files.smallImg2[0].buffer);
      if (req.files.smallImg3) updatedPlace.smallImages.img3 = await uploadImageToCloudinary(req.files.smallImg3[0].buffer);
      if (req.files.smallImg4) updatedPlace.smallImages.img4 = await uploadImageToCloudinary(req.files.smallImg4[0].buffer);
      if (req.files.smallImg5) updatedPlace.smallImages.img5 = await uploadImageToCloudinary(req.files.smallImg5[0].buffer);
      if (req.files.smallImg6) updatedPlace.smallImages.img6 = await uploadImageToCloudinary(req.files.smallImg6[0].buffer);
      if (req.files.smallImg7) updatedPlace.smallImages.img7 = await uploadImageToCloudinary(req.files.smallImg7[0].buffer);
      if (req.files.smallImg8) updatedPlace.smallImages.img8 = await uploadImageToCloudinary(req.files.smallImg8[0].buffer);
      if (req.files.smallImg9) updatedPlace.smallImages.img9 = await uploadImageToCloudinary(req.files.smallImg9[0].buffer);
  
      await place.updateOne(updatedPlace);
      res.status(200).json({ message: 'Place updated successfully', updatedPlace });
    } catch (error) {
      res.status(500).json({ message: 'Error updating place', error: error.message });
    }
  };
  
  // Remove Place
  export const removePlace = async (req, res) => {
    try {
      const { id } = req.body;
      const place = await PlacesModel.findByIdAndDelete(id);
  
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
  
      res.status(200).json({ message: 'Place deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting place', error: error.message });
    }
  };