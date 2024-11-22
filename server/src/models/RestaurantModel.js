import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  place: { type: String, required: true },
  name: { type: String, required: true },
  special_food: { type: String, required: true },
  working_time: { type: String, required: true },
  rating: { type: Number, required: true },
  menuImage: { type: String, required: true },
  image: {type:String, required: true},
  coverImages: {type: Array, required: true},
  smallImages: {type: Array, required: true},
  desc: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  menu: [
    {
      category: { type: String, required: true },
      items: [
        {
          name: { type: String, required: true },
          price: { type: String, required: true },
        },
      ],
    },
  ],
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

export default RestaurantModel;
