import { Points as TPoints } from "../api/points/Points";

export const POINTS_TITLE_FIELD = "id";

export const PointsTitle = (record: TPoints): string => {
  return record.id?.toString() || String(record.id);
};
