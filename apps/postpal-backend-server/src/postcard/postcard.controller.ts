import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostcardService } from "./postcard.service";
import { PostcardControllerBase } from "./base/postcard.controller.base";

@swagger.ApiTags("postcards")
@common.Controller("postcards")
export class PostcardController extends PostcardControllerBase {
  constructor(protected readonly service: PostcardService) {
    super(service);
  }
}
