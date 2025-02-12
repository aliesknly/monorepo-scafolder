import {
  ForDataSourceAuthRepository,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from "@repo/app-modules/user";
import {CustomError} from "@repo/app-modules/utilities"
import { Model } from "mongoose";
import { AuthPasswordUtility } from "../../../../utilities";
import { UserMapper } from "../mappers";

export class UserAuthMongodbRepositoryImp
  implements ForDataSourceAuthRepository
{
  constructor(private readonly userModel: Model<UserEntity>) {}
  async login(user: LoginUserDto): Promise<UserEntity> {
    try {
      const existingUser = await this.userModel.findOne({ email: user.email });

      if (!existingUser) {
        throw CustomError.notFound("email or password is wrong");
      }

      const passwordValidate = AuthPasswordUtility.passwordCompare(
        user.password,
        existingUser.password
      );

      if (!passwordValidate) {
        throw CustomError.badRequest("email or password is wrong");
      }

      return UserMapper.modelToEntity(existingUser);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }

  async register(user: RegisterUserDto): Promise<UserEntity> {
    try {
      const existingUser = await this.userModel.findOne({ email: user.email });
      if (existingUser) throw CustomError.badRequest("User already exists");
      
      const hashedPassword = AuthPasswordUtility.passwordHash(user.password);
      
      const newUser = await this.userModel.create({
        ...user,
        role: "standar",
        password: hashedPassword,
      });
      
      await newUser.save();

      return UserMapper.modelToEntity(newUser);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw CustomError.internalServerError();
    }
  }
}
