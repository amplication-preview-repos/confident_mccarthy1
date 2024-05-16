import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PostcardController } from "../postcard.controller";
import { PostcardService } from "../postcard.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  receivedDate: new Date(),
  recipient: "exampleRecipient",
  sender: "exampleSender",
  sentDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  receivedDate: new Date(),
  recipient: "exampleRecipient",
  sender: "exampleSender",
  sentDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    imageUrl: "exampleImageUrl",
    receivedDate: new Date(),
    recipient: "exampleRecipient",
    sender: "exampleSender",
    sentDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  receivedDate: new Date(),
  recipient: "exampleRecipient",
  sender: "exampleSender",
  sentDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createPostcard() {
    return CREATE_RESULT;
  },
  postcards: () => FIND_MANY_RESULT,
  postcard: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Postcard", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PostcardService,
          useValue: service,
        },
      ],
      controllers: [PostcardController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /postcards", async () => {
    await request(app.getHttpServer())
      .post("/postcards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receivedDate: CREATE_RESULT.receivedDate.toISOString(),
        sentDate: CREATE_RESULT.sentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /postcards", async () => {
    await request(app.getHttpServer())
      .get("/postcards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          receivedDate: FIND_MANY_RESULT[0].receivedDate.toISOString(),
          sentDate: FIND_MANY_RESULT[0].sentDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /postcards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/postcards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /postcards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/postcards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        receivedDate: FIND_ONE_RESULT.receivedDate.toISOString(),
        sentDate: FIND_ONE_RESULT.sentDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /postcards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/postcards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receivedDate: CREATE_RESULT.receivedDate.toISOString(),
        sentDate: CREATE_RESULT.sentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/postcards")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
