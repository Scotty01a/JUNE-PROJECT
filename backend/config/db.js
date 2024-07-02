import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://junior:scotty6love@cluster0.h7idfgf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}