import mongoose,{Schema} from "mongoose";
import { patient } from "./patient.model.js";
import doctor from "./doctor.model.js"
import { timers, trim, type } from "jquery";

const appointmentSchema = new Schema(
    {
        date :{
            type : Date,
            required : true 
        },
        time :{
            type : String,
            required : true,
            trim : true 
        },
        problem :{
            type : String,
            lowercase : true    
        },
        appointmentid :{
            type : String,
            required : true,
        },
        pid :{
            type : Schema.Types.ObjectId,
            ref : "patient",
            required : true
        },
        docid :{
            type : Schema.Types.ObjectId,
            ref : "doctor",
            required : true
        }
    },
    { timestamps : true }
)

export const appointment = mongoose.model("Patient",appointmentSchema)
module.exports = appointment