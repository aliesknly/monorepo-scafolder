import {
	type ForApiAuthRepository,
	type UserAuthRepository,
	LoginUserDto,
	RegisterUserDto,
} from "@repo/app-modules/user";
import { apiHandleError, JwtTokenUtility } from "../../../../utilities";
import type { IRouterMatcher, Request, Response } from "express";

export class ApiAuthControllerRepositoryImp implements ForApiAuthRepository {
	private handleError: (error: unknown, res: Response) => void;

	constructor(private readonly userAuthRepository: UserAuthRepository) {
		this.handleError = apiHandleError;
	}

	login = (req: any, res: any) => {
		const [error, userData] = LoginUserDto.login(req.body);

		if (error) {
			return res.status(400).send(error);
		}

		userData &&
			this.userAuthRepository
				.login(userData)
				.then((user) => {
					const token = new JwtTokenUtility().createToken(user.id);
					res.status(200).send({ token });
				})
				.catch((error) => {
					this.handleError(error, res);
				});
	};

	register = (req: any, res: any) => {
		const [error, userData] = RegisterUserDto.register(req.body);

		if (error) {
			return res.status(400).send(error);
		}

		userData &&
			this.userAuthRepository
				.register(userData)
				.then((user) => {
					res.status(201).send(user);
				})
				.catch((error) => {
					this.handleError(error, res);
				});
	};
}
