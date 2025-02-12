export class UserEntity {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;
  public role: string;

  constructor(user: {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }
}
