import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostcardServiceBase } from "./base/postcard.service.base";

@Injectable()
export class PostcardService extends PostcardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
