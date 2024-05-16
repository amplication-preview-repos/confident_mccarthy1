import * as graphql from "@nestjs/graphql";
import { PointsResolverBase } from "./base/points.resolver.base";
import { Points } from "./base/Points";
import { PointsService } from "./points.service";

@graphql.Resolver(() => Points)
export class PointsResolver extends PointsResolverBase {
  constructor(protected readonly service: PointsService) {
    super(service);
  }
}
