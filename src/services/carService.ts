import { CarModel } from "@/models/car.schema";
import { CarType } from "@/types/userType";
import { promises } from "dns";
import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose";

export const getCars = async () => {
  const cars = await CarModel.find();
  return cars;
};

export const findCar = async (_id: string) => {
  try {
    const findThisCar = await CarModel.findOne({
      _id: new mongoose.Types.ObjectId(_id),
    });
    // console.log("find", findThisCar);
    return findThisCar;
  } catch (error: any) {
    return error.message("error failed");
  }
};

export const filteredByBrand = async (brandTitle: string) => {
  try {
    const findByBrand = await CarModel.aggregate([
      { $match: { brand: brandTitle } },
    ]);
    console.log(findByBrand);
    return findByBrand;
  } catch (error: any) {
    return error.message("error failed");
  }
};

export const createCar = async (
  carModel: string,
  brand: string,
  startPrice: number,
  description: string,
  carDetails: Array<string>,
  img: Array<string>,
  userId: string,
  endTime: string,
  createdAt: string
): Promise<CarType> => {
  const createCar = await CarModel.create({
    carModel,
    brand,
    startPrice,
    description,
    carDetails,
    img,
    userId,
    endTime,
    createdAt,
  });
  return createCar;
};

export const deleteCar = async (id: string) => {
  const deleteThisCar = await CarModel.deleteOne({ _id: id });
  return deleteThisCar;
};

export const editCarAuction = async (CarData: CarType) => {
  const editCar = await CarModel.updateOne(
    { _id: CarData.id },
    {
      carModel: CarData.carModel,
      brand: CarData.brand,
      price: CarData.price,
      sale: CarData.sale,
      description: CarData.description,
      carDetails: CarData.carDetails,
      img: CarData.img,
    }
  );
  return editCar;
};
