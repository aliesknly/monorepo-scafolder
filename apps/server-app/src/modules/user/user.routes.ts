import { Router } from "express";
import {
  UserMongodbRepositoryImp,
  ApiUserControllerRepositoryImp,
  UserRepositoryImp,
} from "./infrastructure";

export class UserRoutes {
 
  static get routes(): Router {
    const route = Router();

    const userDatasource = new UserMongodbRepositoryImp();
    const userRepository = new UserRepositoryImp(userDatasource);
    const userApiController = new ApiUserControllerRepositoryImp(userRepository);


    route.get("/", userApiController.getAllUsers);

    route.post("/", userApiController.createUser);

    route.put("/:id", userApiController.updateUser);

    route.delete("/:id", userApiController.deleteUser);

    route.get("/:id", userApiController.getUserById);

    return route;
  }
}
