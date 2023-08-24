import mongoose from "mongoose";

const {Schema} = mongoose

const photoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    updoladedAt: {
        type: Date,
        default: Date.now
    }
})

const Photo = mongoose.model("Photo", photoSchema)

export default Photo;