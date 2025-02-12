export class RegisterUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static register(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    //evaluation of the existence of the fields
    if (!name) return ["name is required", undefined];
    if (!email) return ["email is required", undefined];
    if (!password) return ["password is required", undefined];

    //return data
    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
