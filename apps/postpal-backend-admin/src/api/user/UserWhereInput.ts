import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PointsListRelationFilter } from "../points/PointsListRelationFilter";

export type UserWhereInput = {
  address?: AddressWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  pointsItems?: PointsListRelationFilter;
  username?: StringNullableFilter;
};
