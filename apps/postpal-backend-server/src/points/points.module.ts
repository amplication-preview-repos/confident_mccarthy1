import { Module } from "@nestjs/common";
import { PointsModuleBase } from "./base/points.module.base";
import { PointsService } from "./points.service";
import { PointsController } from "./points.controller";
import { PointsResolver } from "./points.resolver";

@Module({
  imports: [PointsModuleBase],
  controllers: [PointsController],
  providers: [PointsService, PointsResolver],
  exports: [PointsService],
})
export class PointsModule {}
