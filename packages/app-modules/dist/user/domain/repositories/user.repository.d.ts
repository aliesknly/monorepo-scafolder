import { CreateUserDto } from "../dto";
import { UserEntity } from "../entities";
export declare abstract class UserRepository {
    abstract createUser(user: CreateUserDto): Promise<UserEntity>;
    abstract getAllUsers(): Promise<UserEntity[]>;
    abstract getUserById(id: string): Promise<UserEntity>;
    abstract updateUser(id: string, userData: Partial<CreateUserDto>): Promise<UserEntity>;
    abstract deleteUser(id: string): Promise<UserEntity>;
}
//# sourceMappingURL=user.repository.d.ts.map