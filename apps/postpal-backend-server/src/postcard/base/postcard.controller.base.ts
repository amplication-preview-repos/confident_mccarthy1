/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PostcardService } from "../postcard.service";
import { PostcardCreateInput } from "./PostcardCreateInput";
import { Postcard } from "./Postcard";
import { PostcardFindManyArgs } from "./PostcardFindManyArgs";
import { PostcardWhereUniqueInput } from "./PostcardWhereUniqueInput";
import { PostcardUpdateInput } from "./PostcardUpdateInput";

export class PostcardControllerBase {
  constructor(protected readonly service: PostcardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Postcard })
  async createPostcard(
    @common.Body() data: PostcardCreateInput
  ): Promise<Postcard> {
    return await this.service.createPostcard({
      data: data,
      select: {
        createdAt: true,
        id: true,
        imageUrl: true,
        receivedDate: true,
        recipient: true,
        sender: true,
        sentDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Postcard] })
  @ApiNestedQuery(PostcardFindManyArgs)
  async postcards(@common.Req() request: Request): Promise<Postcard[]> {
    const args = plainToClass(PostcardFindManyArgs, request.query);
    return this.service.postcards({
      ...args,
      select: {
        createdAt: true,
        id: true,
        imageUrl: true,
        receivedDate: true,
        recipient: true,
        sender: true,
        sentDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Postcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async postcard(
    @common.Param() params: PostcardWhereUniqueInput
  ): Promise<Postcard | null> {
    const result = await this.service.postcard({
      where: params,
      select: {
        createdAt: true,
        id: true,
        imageUrl: true,
        receivedDate: true,
        recipient: true,
        sender: true,
        sentDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Postcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePostcard(
    @common.Param() params: PostcardWhereUniqueInput,
    @common.Body() data: PostcardUpdateInput
  ): Promise<Postcard | null> {
    try {
      return await this.service.updatePostcard({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          imageUrl: true,
          receivedDate: true,
          recipient: true,
          sender: true,
          sentDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Postcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePostcard(
    @common.Param() params: PostcardWhereUniqueInput
  ): Promise<Postcard | null> {
    try {
      return await this.service.deletePostcard({
        where: params,
        select: {
          createdAt: true,
          id: true,
          imageUrl: true,
          receivedDate: true,
          recipient: true,
          sender: true,
          sentDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
