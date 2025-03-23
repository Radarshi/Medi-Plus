import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username :{
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email :{
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
        },
        phone_number :{
            type : Number,
            required : true,
            unique : true,
            default : "+91 123-456-7890" 
        },
        fullname :{
            type : String,
            required : true,
            trim : true,
            index : true,
            index : true
        },
        avatar :{
            type : String,
            required : true
        },
        coverImg :{
            type : String,
        },
        password :{
            type : String,
            trim : true,
            required : [true,'Password is required']
        },
        refreshToken :{
            type : String
        }
    },
        { timestamps : true } 
)

export const user = mongoose.model("User",userSchema)
module.exports = user