import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import {
  createBrand,
  deleteBrand,
  editBrand,
  getBrands,
} from "@/services/brandService";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  switch (req.method) {
    case "GET":
      try {
        const brands = await getBrands();
        res.status(200).json(brands);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "POST":
      try {
        const creationOfBrand = await createBrand(
          req.body.brandTitle,
          req.body.img
        );
        res
          .status(200)
          .json({ message: "Brand succesfully created", creationOfBrand });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "DELETE":
      try {
        const deleteOfBrand = await deleteBrand(req.body.id);
        res
          .status(200)
          .json({ message: "Brand succesfully deleted", deleteOfBrand });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
    case "PUT":
      try {
        const brand = await editBrand(req.body);
        res.status(200).json({ message: "Brand succesfully updated", brand });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
      break;
  }
};

export default handler;
