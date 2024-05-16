import { PointsWhereInput } from "./PointsWhereInput";
import { PointsOrderByInput } from "./PointsOrderByInput";

export type PointsFindManyArgs = {
  where?: PointsWhereInput;
  orderBy?: Array<PointsOrderByInput>;
  skip?: number;
  take?: number;
};
