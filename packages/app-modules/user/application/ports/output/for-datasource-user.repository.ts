import { CreateUserDto, UserEntity, UpdateUserDto } from "../../../domain";

export abstract class ForDataSourceUserRepository {
	abstract createUser(user: CreateUserDto): Promise<UserEntity>;
	abstract getAllUsers(): Promise<UserEntity[]>;
	abstract getUserById(id: string): Promise<UserEntity>;
	abstract updateUser(
		id: string,
		userData: Partial<UpdateUserDto>,
	): Promise<UserEntity>;
	abstract deleteUser(id: string): Promise<UserEntity>;
}
