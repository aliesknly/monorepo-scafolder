import { RegisterUserDto, LoginUserDto } from "../dto";
import { UserEntity } from "../entities";
export declare abstract class UserAuthRepository {
    abstract login(user: LoginUserDto): Promise<UserEntity>;
    abstract register(user: RegisterUserDto): Promise<UserEntity>;
}
//# sourceMappingURL=user-auth.repository.d.ts.map