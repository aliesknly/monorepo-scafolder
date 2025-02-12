export class LoginUserDto {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static login(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    //evaluation of the existence of the fields
    if (!password) return ["password is required", undefined];
    if (!email) return ["email is required", undefined];

    //return data
    return [undefined, new LoginUserDto(email, password)];
  }
}
