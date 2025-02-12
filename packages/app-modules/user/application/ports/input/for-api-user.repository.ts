export abstract class ForApiUserRepository {
  abstract createUser(req: any, res: any): void;
  abstract getAllUsers(req: any, res: any): void;
  abstract getUserById(req: any, res: any): void;
  abstract updateUser(req: any, res: any): void;
  abstract deleteUser(req: any, res: any): void;
}
