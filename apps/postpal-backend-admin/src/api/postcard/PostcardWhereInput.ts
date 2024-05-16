import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostcardWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  receivedDate?: DateTimeNullableFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
  sentDate?: DateTimeNullableFilter;
};
