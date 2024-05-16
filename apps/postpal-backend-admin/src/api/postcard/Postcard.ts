export type Postcard = {
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  receivedDate: Date | null;
  recipient: string | null;
  sender: string | null;
  sentDate: Date | null;
  updatedAt: Date;
};
