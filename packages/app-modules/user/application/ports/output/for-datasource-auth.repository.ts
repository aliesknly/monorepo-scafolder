import { UserEntity, RegisterUserDto, LoginUserDto } from "../../../domain";
export abstract class ForDataSourceAuthRepository {
  abstract login(user: LoginUserDto): Promise<UserEntity>;
  abstract register(user: RegisterUserDto): Promise<UserEntity>;
}
