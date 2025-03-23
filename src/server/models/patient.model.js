import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema(
    {
        pname :{
            type : String,
            required : true,
            trim : true,
            lowercase : true
        },
        email :{
            type : String,
            trim : true,
            lowercase : true,
            required : true
        },
        phone_number :{
            type : Number,
            required : true,
            default : "+91 123-456-7890"    
        },
        pid :{
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    }
)

export const patient = mongoose.model("Patient",patientSchema)
module.exports = patient