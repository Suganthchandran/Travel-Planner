import express from 'express';
import { addHotel, listHotel, findByIdHotel, updateHotel, removeHotel } from '../controllers/HotelsController.js';
import upload from '../middleware/PlacesMulter.js';

const hotelRouter = express.Router();

hotelRouter.post(
    '/add',
    upload.fields([{name:'image',maxCount:1},{name:'Coverimage1',maxCount:1},{name:'Coverimage2',maxCount:1},{name:'Coverimage3',maxCount:1},{name:'Coverimage4',maxCount:1},,{name:'SmallImage1',maxCount:1},,{name:'SmallImage2',maxCount:1},,{name:'SmallImage3',maxCount:1},,{name:'SmallImage4',maxCount:1},,{name:'SmallImage5',maxCount:1},,{name:'SmallImage6',maxCount:1},,{name:'SmallImage7',maxCount:1},,{name:'SmallImage8',maxCount:1},,{name:'SmallImage9',maxCount:1}]),
    addHotel
  );
  
hotelRouter.get('/list', listHotel);
hotelRouter.get('/:id', findByIdHotel);
// hotelRouter.put('/updateplace/:id',uploadFields, updateHotel);
hotelRouter.delete('/delete', removeHotel);

export default hotelRouter;
