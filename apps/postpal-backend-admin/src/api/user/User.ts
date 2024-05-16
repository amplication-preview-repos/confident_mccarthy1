import { Address } from "../address/Address";
import { Points } from "../points/Points";

export type User = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  pointsItems?: Array<Points>;
  updatedAt: Date;
  username: string | null;
};
