import { User } from "../user/User";

export type Points = {
  createdAt: Date;
  id: string;
  totalPoints: number | null;
  updatedAt: Date;
  user?: User | null;
};
