import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import {
  createCar,
  deleteCar,
  editCarAuction,
  getCars,
} from "@/services/carService";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);

  switch (req.method) {
    case "GET":
      try {
        const cars = await getCars();
        res.status(200).json(cars);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "POST":
      try {
        const car = await createCar(
          req.body.carModel,
          req.body.brand,
          req.body.startPrice,
          req.body.description,
          req.body.carDetails,
          req.body.img,
          req.body.userId
        );
        res.status(200).json({ message: "Car succesfully created", car });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "DELETE":
      try {
        const deletedCar = await deleteCar(req.body.id);
        res
          .status(200)
          .json({ message: "Car succesfully deleted", deletedCar });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "PUT":
      try {
        const food = await editCarAuction(req.body);
        res
          .status(200)
          .json({ message: "Car Auction succesfully updated", food });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
  }
};

export default handler;
