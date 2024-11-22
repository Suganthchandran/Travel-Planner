import express from 'express';
import { addPlace, listPlaces, findByIdPlace, updatePlace, removePlace } from '../controllers/PlacesController.js';
import upload from '../middleware/PlacesMulter.js';

const placesRouter = express.Router();

placesRouter.post(
    '/add',
    upload.fields([{name:'image',maxCount:1},{name:'Coverimage1',maxCount:1},{name:'Coverimage2',maxCount:1},{name:'Coverimage3',maxCount:1},{name:'Coverimage4',maxCount:1},,{name:'SmallImage1',maxCount:1},,{name:'SmallImage2',maxCount:1},,{name:'SmallImage3',maxCount:1},,{name:'SmallImage4',maxCount:1},,{name:'SmallImage5',maxCount:1},,{name:'SmallImage6',maxCount:1},,{name:'SmallImage7',maxCount:1},,{name:'SmallImage8',maxCount:1},,{name:'SmallImage9',maxCount:1}]),
    addPlace
  );
  
placesRouter.get('/list', listPlaces);
placesRouter.get('/findplace/:id', findByIdPlace);
// placesRouter.put('/updateplace/:id',uploadFields, updatePlace);
placesRouter.delete('/delete', removePlace);

export default placesRouter;
