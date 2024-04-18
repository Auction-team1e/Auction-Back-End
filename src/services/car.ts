import { CarModel } from "@/models/car.schema";
import { CarDetailsType } from "@/types/userType";

export const createCar = async (
  carModel: string,
  Brand: string,
  price: number,
  sale: number,
  description: string,
  carDetails: Array<CarDetailsType>,
  img: String
): Promise<CarDetailsType> => {
  const createCar = await CarModel.create({
    carModel,
    Brand,
    price,
    sale,
    description,
    carDetails,
    img,
  });
  return createCar;
};
