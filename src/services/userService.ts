import { UserModel } from "@/models/user.schema";
import { UserType } from "@/types/userType";

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: String
): Promise<UserType> => {
  const createUser = await UserModel.create({
    firstName,
    lastName,
    email,
    password,
  });
  return createUser;
};
