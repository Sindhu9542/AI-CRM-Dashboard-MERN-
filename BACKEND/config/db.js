import mongoose from "mongoose";
export const connectDB=async()=>{
    const uri=process.env.MONGO_URI;
    if(!uri){
        throw new Error("Mongo_uri is not defined in environment variables");
    }
    //avoid noise
    mongoose.set("strictQuery",true);
    const conn=await mongoose.connect(uri,{
        serverSelectionTimeoutMS:10000,
    });
    console.log(`mongoDB connected:${conn.connection.host}/${conn.connection.name}`);
    return conn;
};
