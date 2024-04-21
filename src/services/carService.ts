import { CarModel } from "@/models/car.schema";
import { CarType } from "@/types/userType";

export const getCars = async () => {
  const cars = await CarModel.find();
  return cars;
};

export const createCar = async (
  carModel: string,
  Brand: string,
  price: number,
  description: string,
  carDetails: Array<string>,
  img: Array<string>,
  userId: string
): Promise<CarType> => {
  const createCar = await CarModel.create({
    carModel,
    Brand,
    price,
    description,
    carDetails,
    img,
    userId,
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