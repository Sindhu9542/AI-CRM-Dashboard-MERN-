import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"name is required"],
            trim:true,
        },
        email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
            lowercase:true,
            trim:true,
            match:[/^\S+@\S+\.\S+$/,"please provide a valid email"],
        },
        password:{
            type:String,
            required:[true,"password is required"],
            minlength:[6,"min length 6"],
            select:false,
        },
        role:{
            type:String,
            enum:["owner","member"],
            default:"owner"
        },
        company:{
            type:String,
            trim:true,
            default:"",
        },
        avatar:{
            type:String,
            default:"",
        }
    },
        { timestamps:true }
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

userSchema.methods.matchPassword=function(entered){
    return bcrypt.compare(entered,this.password);
};
export const User=mongoose.model("User",userSchema);