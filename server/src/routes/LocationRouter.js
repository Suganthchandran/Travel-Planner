import express from 'express';
import { addLocation, listLocations, findByIdLocation, removeLocation, updateLocation, findByNameLocation } from '../controllers/LocationController.js';
import upload from '../middleware/Multer.js';

const locationRouter = express.Router();

locationRouter.post('/add', upload.single('image'), addLocation);
locationRouter.get('/list', listLocations);
locationRouter.get('/findlocation/:id', findByIdLocation);
locationRouter.delete('/delete', removeLocation);
locationRouter.put('/updatelocation/:id', upload.single('image'), updateLocation);
locationRouter.get('/findlocationbyname/:name', findByNameLocation);

export default locationRouter;
