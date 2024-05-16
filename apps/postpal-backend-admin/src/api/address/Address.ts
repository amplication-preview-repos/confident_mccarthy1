import { User } from "../user/User";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  state: string | null;
  street: string | null;
  updatedAt: Date;
  users?: Array<User>;
  zipCode: string | null;
};
