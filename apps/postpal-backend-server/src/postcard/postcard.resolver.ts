import * as graphql from "@nestjs/graphql";
import { PostcardResolverBase } from "./base/postcard.resolver.base";
import { Postcard } from "./base/Postcard";
import { PostcardService } from "./postcard.service";

@graphql.Resolver(() => Postcard)
export class PostcardResolver extends PostcardResolverBase {
  constructor(protected readonly service: PostcardService) {
    super(service);
  }
}
