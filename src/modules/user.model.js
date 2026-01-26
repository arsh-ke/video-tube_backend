import mongoose ,{Schema} from "mongoose";

const userschema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
    }


})
 export const User = mongoose.model("User", userschema);