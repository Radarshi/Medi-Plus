import { type } from "jquery";
import mongoose,{Schema} from "mongoose";

const hospitalSchema = new Schema(
    {
        hospitalid :{
            type : String,
            required : true,
        },
        hospitalname :{
            type : String,
            required : true
        },
        address :{
            type : String,
            required : true,
            trim : true
        },
        state :{
            type : String
        },
        appointmentroomscount :{
            type : Number,
            required : true,
            default : 0
        }
    }
)

export const hospital = mongoose.model("Hospital",hospitalSchema)
module.exports = hospital