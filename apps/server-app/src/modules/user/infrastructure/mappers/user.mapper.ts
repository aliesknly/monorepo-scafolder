import {  UserEntity } from "@repo/app-modules/user";
import { CustomError } from "@repo/app-modules/utilities"
export class UserMapper {
  static modelToEntity(object: { [key: string]: any }): any {
    const { _id, id, name, email, password, role } = object;

    if (!id || !_id) throw CustomError.badRequest("id not found");

    if (!name) throw CustomError.badRequest("name not found");
    if (!email) throw CustomError.badRequest("email not found");
    if (!password) throw CustomError.badRequest("password not found");
    if (!role) throw CustomError.badRequest("role not found");

    return new UserEntity({
      id: _id || id,
      name,
      email,
      password: "",
      role,
    });
  }
}
