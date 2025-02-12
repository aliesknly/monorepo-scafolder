import "dotenv/config";

import { get } from "env-var";

export const ENVS = {
  //DATABASE
  DB_HOST: get("DB_HOST").required().asString(),
  DB_NAME: get("DB_NAME").required().asString(),
  DB_USER: get("DB_USER").required().asString(),
  DB_PASSWORD: get("DB_PASSWORD").required().asString(),
  //API
  API_PORT: get("API_PORT").default(3000).asPortNumber(),
  //JWT
  SERVER_SECRET_WORD: get("SERVER_SECRET_WORD").required().asString(),
};
