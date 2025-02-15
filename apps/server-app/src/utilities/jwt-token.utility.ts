import jwt from "jsonwebtoken";
import { ENVS } from "../config/envs.config";

export class JwtTokenUtility {
	private secretWord: string;
	constructor() {
		this.secretWord = ENVS.SERVER_SECRET_WORD;
	}
	createToken(
		userId: string,
		expireTime: jwt.SignOptions["expiresIn"] = "1H",
	): string {
		return jwt.sign({ userId: userId }, this.secretWord, {
			expiresIn: expireTime,
		});
	}
	validateToken(token: string): string | jwt.JwtPayload {
		return jwt.verify(token, ENVS.SERVER_SECRET_WORD);
	}

	getUserIdByToken(token: string): string {
		const { userId } = jwt.decode(token) as { userId: string };
		return userId;
	}
}
