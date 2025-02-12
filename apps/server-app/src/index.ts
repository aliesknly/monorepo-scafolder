import { ExpressService, MongoDBService } from "./services";
import { ENVS } from "./config";
import { AppRoutes } from "./modules";

(() => {
  main();
})();

async function main() {
  //Database service
  await new MongoDBService({
    host: ENVS.DB_HOST,
    userName: ENVS.DB_USER,
    password: ENVS.DB_PASSWORD,
    databaseName: ENVS.DB_NAME,
  }).connect();

  //API service
  new ExpressService({
    port: ENVS.API_PORT,
    routes: AppRoutes.routes,
  }).start();
}
