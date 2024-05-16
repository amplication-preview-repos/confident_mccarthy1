import { SortOrder } from "../../util/SortOrder";

export type PointsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  totalPoints?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
