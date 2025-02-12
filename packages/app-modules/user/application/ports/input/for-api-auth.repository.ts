export abstract class ForApiAuthRepository {
  abstract login(req: any, res: any): void;
  abstract register(req: any, res: any): void;
}
