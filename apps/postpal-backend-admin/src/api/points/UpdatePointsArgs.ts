import { PointsWhereUniqueInput } from "./PointsWhereUniqueInput";
import { PointsUpdateInput } from "./PointsUpdateInput";

export type UpdatePointsArgs = {
  where: PointsWhereUniqueInput;
  data: PointsUpdateInput;
};
