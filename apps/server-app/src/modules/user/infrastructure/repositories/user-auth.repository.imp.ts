import {
  ForDataSourceAuthRepository,
  LoginUserDto,
  RegisterUserDto,
  UserAuthRepository,
  UserEntity,
} from "@repo/app-modules";

export class UserAuthRepositoryImp implements UserAuthRepository {
  constructor(
    private readonly userAuthDataSource: ForDataSourceAuthRepository
  ) {}

  async login(user: LoginUserDto): Promise<UserEntity> {
    return await this.userAuthDataSource.login(user);
  }

  async register(user: RegisterUserDto): Promise<UserEntity> {
    return await this.userAuthDataSource.register(user);
  }
}
