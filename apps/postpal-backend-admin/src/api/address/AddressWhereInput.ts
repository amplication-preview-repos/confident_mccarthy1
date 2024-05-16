import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  users?: UserListRelationFilter;
  zipCode?: StringNullableFilter;
};
