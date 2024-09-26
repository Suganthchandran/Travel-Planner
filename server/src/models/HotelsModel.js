import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name : {type: String,required:true},
    desc : {type: String,required:true},
    image : {type: String,required:true},
    file : {type: String,required:true},
    rating : {type: String,required:true}
})

const hotelModel = mongoose.models.hotel || mongoose.model("hotel",hotelSchema);

export default hotelModel;