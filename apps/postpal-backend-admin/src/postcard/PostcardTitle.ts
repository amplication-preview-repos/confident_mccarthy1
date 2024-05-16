import { Postcard as TPostcard } from "../api/postcard/Postcard";

export const POSTCARD_TITLE_FIELD = "imageUrl";

export const PostcardTitle = (record: TPostcard): string => {
  return record.imageUrl?.toString() || String(record.id);
};
