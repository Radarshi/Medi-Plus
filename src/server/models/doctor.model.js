import { type } from "jquery";
import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        docid :{
            type: String,
            required : true,
            unique : true,
            trim : true,
        },
        docname :{
            type :  String,
            trim : true,
            lowercase : true,
        },
        salary :{
            type : Number,
        },
        qualification :{
            type : String,
            required : true,
            uppercase : true
        },
        experience :{
            type : Number,
            required : true,
            default : 0
        },
        specialization :{
            type : String,
            required : true,
            trim : true
        },
        isfree :{
            type : Boolean,
            required : true
        }
    },
    { timestamps:true }
)

export const doctor = mongoose.model("Doctor",doctorSchema)
module.exports = doctor