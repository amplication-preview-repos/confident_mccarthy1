import { SortOrder } from "../../util/SortOrder";

export type PostcardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  receivedDate?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  sentDate?: SortOrder;
  updatedAt?: SortOrder;
};
