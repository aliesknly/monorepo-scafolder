export class UpdateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { name, email, password, role } = object;

    //evaluation of the existence of the fields
    return [undefined, new UpdateUserDto(name, email, password, role)];
  }
}
