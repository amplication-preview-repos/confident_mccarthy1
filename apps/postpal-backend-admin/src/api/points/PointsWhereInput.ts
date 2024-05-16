import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointsWhereInput = {
  id?: StringFilter;
  totalPoints?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
