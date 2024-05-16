import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { PointsCreateNestedManyWithoutUsersInput } from "./PointsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  password?: string | null;
  pointsItems?: PointsCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
