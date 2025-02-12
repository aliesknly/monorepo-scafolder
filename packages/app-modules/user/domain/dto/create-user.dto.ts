export class CreateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string
  ) {}

 static create (object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name, email, password, role } = object;

    //evaluation of the existence of the fields
    if (!name) return ["name is required", undefined];
    if (!email) return ["email is required", undefined];
    if (!password) return ["password is required", undefined];
    if (!role) return ["role is required", undefined];

    //return data
    return [undefined, new CreateUserDto(name, email, password, role)];
  }
}
