import mongoose, { model, Schema } from "mongoose";

const CarSchema = new Schema({
  carModel: String,
  brand: String,
  startPrice: Number,
  description: String,
  carDetails: Array<String>,
  img: Array<String>,
  userId: String,
});

export const CarModel = mongoose.models.Car || model("Car", CarSchema);
