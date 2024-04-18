import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { createCar } from "@/services/car";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);
  console.log(req.body);

  switch (req.method) {
    case "POST":
      try {
        const car = await createCar(
          req.body.carModel,
          req.body.Brand,
          req.body.price,
          req.body.sale,
          req.body.description,
          req.body.carDetails,
          req.body.img
        );
        res.status(200).json({ message: "Car succesfully created", car });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
};

export default handler;
