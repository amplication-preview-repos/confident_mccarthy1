import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { PointsUpdateManyWithoutUsersInput } from "./PointsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  password?: string | null;
  pointsItems?: PointsUpdateManyWithoutUsersInput;
  username?: string | null;
};
