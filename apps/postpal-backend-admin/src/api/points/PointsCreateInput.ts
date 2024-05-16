import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointsCreateInput = {
  totalPoints?: number | null;
  user?: UserWhereUniqueInput | null;
};
