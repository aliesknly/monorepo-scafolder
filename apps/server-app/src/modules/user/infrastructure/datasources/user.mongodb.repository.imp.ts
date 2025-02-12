import {
  ForDataSourceUserRepository,
  CreateUserDto,
  UserEntity,
  UpdateUserDto,
} from "@repo/app-modules/user";
import {
  CustomError,
} from "@repo/app-modules/utilities";
import { UserModel } from "./user.mongodb.model";
import { AuthPasswordUtility } from "../../../../utilities";

export class UserMongodbRepositoryImp implements ForDataSourceUserRepository {
  async createUser(user: CreateUserDto): Promise<UserEntity> {
    try {
      const existingUser = await UserModel.findOne({ email: user.email });

      //check if user already exists
      if (existingUser) {
        throw CustomError.badRequest("User already exists");
      }

      //hash password
      const passwordHash = AuthPasswordUtility.passwordHash(user.password);

      const createdUser = new UserModel({
        ...user,
        password: passwordHash,
      });

      //Retuns the created user
      return createdUser.save()
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserModel.find();
  }

  async getUserById(id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findById(id);

      if (!user) {
        throw CustomError.notFound("User not found");
      }

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }

  async deleteUser(id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        throw CustomError.notFound("User not found");
      }
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }

  async updateUser(
    id: string,
    userData: Partial<UpdateUserDto>
  ): Promise<UserEntity> {
    try {
      const user = await UserModel.findByIdAndUpdate(id, userData, {
        new: true,
      });
      if (!user) {
        throw CustomError.notFound("User not found");
      }
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
}
