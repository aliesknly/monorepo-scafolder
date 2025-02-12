import {
	ForApiUserRepository,
	UpdateUserDto,
	UserRepository,
	CreateUserDto,
} from "@repo/app-modules/user";
import { Request, Response } from "express";
import { apiHandleError } from "../../../../utilities";
import { UserMapper } from "../mappers";

export class ApiUserControllerRepositoryImp implements ForApiUserRepository {
	private handleError: (error: unknown, res: Response) => void;

	constructor(private readonly userRepository: UserRepository) {
		this.handleError = apiHandleError;
	}

	//Create user
	createUser = (req: any, res: any) => {
		const user = req.body;

		const [error, userData] = CreateUserDto.create(user);

		if (error) {
			return res.status(400).send(error);
		}

		if (userData) {
			this.userRepository
				.createUser(userData)
				.then((user) => {
					res.status(201).send(UserMapper.modelToEntity(user));
				})
				.catch((error) => {
					this.handleError(error, res);
				});
		}
	};

	//Get all users
	getAllUsers = (req: Request, res: Response) => {
		this.userRepository
			.getAllUsers()
			.then((users) => {
				res.status(200).send(users);
			})
			.catch((error) => {
				this.handleError(error, res);
			});
	};

	//Get user by id
	getUserById = (req: Request, res: Response) => {
		this.userRepository
			.getUserById(req.params.id)
			.then((user) => {
				res.status(200).send(user);
			})
			.catch((error) => {
				this.handleError(error, res);
			});
	};

	//Update user
	updateUser = (req: Request, res: any) => {
		const [error, updateUser] = UpdateUserDto.create(req.body);
		const id = req.params.id;
		if (error) {
			return res.status(400).send(error);
		}
		if (updateUser) {
			this.userRepository
				.updateUser(id, updateUser)
				.then((user) => {
					res.status(200).send(user);
				})
				.catch((error) => {
					this.handleError(error, res);
				});
		}
	};

	//Delete user
	deleteUser = (req: Request, res: Response) => {
		const id = req.params.id;
		this.userRepository
			.deleteUser(id)
			.then((user) => {
				res.status(200).send(user);
			})
			.catch((error) => {
				this.handleError(error, res);
			});
	};
}
