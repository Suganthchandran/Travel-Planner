import mongoose from 'mongoose'

const favouriteSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    itemId: {type: String, required: true},
    name: {type: String, required: true},
    type: {type:String, required: true},
    place: {type: String, required: true},
    image: {type: String, required: true}
})

const favouriteModel = mongoose.model('favourite', favouriteSchema)

export default favouriteModel;