import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointsUpdateInput = {
  totalPoints?: number | null;
  user?: UserWhereUniqueInput | null;
};
