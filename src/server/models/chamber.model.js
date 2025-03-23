import mongoose, { Schema } from "mongoose";

const chamberSchema = new Schema(
    {
        chamberid :{
            type : String,
            required : true
        },
        address :{
            type : String,
            required : true
        },
        openinghours :{
            type : String,
            required : true
        }
    }
)

export const chamber = mongoose.model("Chamber",chamberSchema)
module.exports = chamber