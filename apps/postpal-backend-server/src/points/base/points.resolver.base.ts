/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Points } from "./Points";
import { PointsCountArgs } from "./PointsCountArgs";
import { PointsFindManyArgs } from "./PointsFindManyArgs";
import { PointsFindUniqueArgs } from "./PointsFindUniqueArgs";
import { CreatePointsArgs } from "./CreatePointsArgs";
import { UpdatePointsArgs } from "./UpdatePointsArgs";
import { DeletePointsArgs } from "./DeletePointsArgs";
import { User } from "../../user/base/User";
import { PointsService } from "../points.service";
@graphql.Resolver(() => Points)
export class PointsResolverBase {
  constructor(protected readonly service: PointsService) {}

  async _pointsItemsMeta(
    @graphql.Args() args: PointsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Points])
  async pointsItems(
    @graphql.Args() args: PointsFindManyArgs
  ): Promise<Points[]> {
    return this.service.pointsItems(args);
  }

  @graphql.Query(() => Points, { nullable: true })
  async points(
    @graphql.Args() args: PointsFindUniqueArgs
  ): Promise<Points | null> {
    const result = await this.service.points(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Points)
  async createPoints(@graphql.Args() args: CreatePointsArgs): Promise<Points> {
    return await this.service.createPoints({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Points)
  async updatePoints(
    @graphql.Args() args: UpdatePointsArgs
  ): Promise<Points | null> {
    try {
      return await this.service.updatePoints({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Points)
  async deletePoints(
    @graphql.Args() args: DeletePointsArgs
  ): Promise<Points | null> {
    try {
      return await this.service.deletePoints(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Points): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
