import {
  UserRepository,
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  ForDataSourceUserRepository,
} from "@repo/app-modules";

export class UserRepositoryImp implements UserRepository {
  constructor(private readonly userDataSource: ForDataSourceUserRepository) {}
  async createUser(user: CreateUserDto): Promise<UserEntity> {
    return await this.userDataSource.createUser(user);
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userDataSource.getAllUsers();
  }
  async getUserById(id: string): Promise<UserEntity> {
    return await this.userDataSource.getUserById(id);
  }
  async updateUser(
    id: string,
    userData: Partial<UpdateUserDto>
  ): Promise<UserEntity> {
    return await this.userDataSource.updateUser(id, userData);
  }
  async deleteUser(id: string): Promise<UserEntity> {
    return await this.userDataSource.deleteUser(id);
  }
}
