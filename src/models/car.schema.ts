import mongoose, { model, Schema } from "mongoose";
type CarDetailsType = {
  vatType: { type: String; required: true };
  year: { type: number; required: true };
  location: { type: String; required: true };
  address: { type: String; required: true };
  mileage: { type: String; required: true };
  fuelType: { type: String; required: true };
  power: { type: String; required: true };
  condition: { type: String; required: true };
  color: { type: String; required: true };
  intColor: { type: String; required: true };
};

const CarSchema = new Schema({
  carModel: String,
  Brand: String,
  price: Number,
  sale: Number,
  description: String,
  carDetails: Array<CarDetailsType>,
  img: String,
});

export const CarModel = mongoose.models.Car || model("Car", CarSchema);
