import { RegisterUserDto, LoginUserDto } from "../dto";
import { UserEntity } from "../entities";

export abstract class UserAuthRepository {
  abstract login(user: LoginUserDto): Promise<UserEntity>;
  abstract register(user: RegisterUserDto): Promise<UserEntity>;
}
