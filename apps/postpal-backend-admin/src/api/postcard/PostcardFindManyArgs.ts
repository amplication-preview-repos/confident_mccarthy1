import { PostcardWhereInput } from "./PostcardWhereInput";
import { PostcardOrderByInput } from "./PostcardOrderByInput";

export type PostcardFindManyArgs = {
  where?: PostcardWhereInput;
  orderBy?: Array<PostcardOrderByInput>;
  skip?: number;
  take?: number;
};
