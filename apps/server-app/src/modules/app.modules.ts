import { Router } from "express";
import { UserRoutes, UserAuthRoutes } from "./user";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    //example
    router.get("/example", (req, res) => {
      res.send("hello world");
    });
    //USER Routes
    router.use("/user", UserRoutes.routes);

    //AUTH Routes
    router.use(UserAuthRoutes.routes);
    return router;
  }
}
