import { Router } from "express";
import {
  ApiAuthControllerRepositoryImp,
  UserAuthMongodbRepositoryImp,
  UserAuthRepositoryImp,
  UserModel,
} from "./infrastructure";

export class UserAuthRoutes {
  static get routes(): Router {
    const router = Router();

    const userModel = UserModel;
    const userAuthDatasorce = new UserAuthMongodbRepositoryImp(userModel);
    const userAuthRepository = new UserAuthRepositoryImp(userAuthDatasorce);
    const userAuthApiController = new ApiAuthControllerRepositoryImp(
      userAuthRepository
    );

    router.post("/login", userAuthApiController.login);

    router.post("/register", userAuthApiController.register);

    return router;
  }
}
