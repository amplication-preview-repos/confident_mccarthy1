import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PointsServiceBase } from "./base/points.service.base";

@Injectable()
export class PointsService extends PointsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
