import { Module } from "@nestjs/common";
import { PostcardModuleBase } from "./base/postcard.module.base";
import { PostcardService } from "./postcard.service";
import { PostcardController } from "./postcard.controller";
import { PostcardResolver } from "./postcard.resolver";

@Module({
  imports: [PostcardModuleBase],
  controllers: [PostcardController],
  providers: [PostcardService, PostcardResolver],
  exports: [PostcardService],
})
export class PostcardModule {}
