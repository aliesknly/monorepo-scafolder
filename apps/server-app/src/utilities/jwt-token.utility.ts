import jwt from "jsonwebtoken";
import { ENVS } from "../config/envs.config";

export class JwtTokenUtility {
  static createToken(userId: string, expireTime = "1h"): string {
    return jwt.sign({ userId: userId }, ENVS.SERVER_SECRET_WORD, {
      expiresIn: expireTime,
    });
  }
  static validateToken(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, ENVS.SERVER_SECRET_WORD);
  }

  static getUserIdByToken(token: string): string {
    const { userId } = jwt.decode(token) as { userId: string };
    return userId;
  }
}
