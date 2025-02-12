import { UserEntity, RegisterUserDto, LoginUserDto } from "../../../domain";
export declare abstract class ForDataSourceAuthRepository {
    abstract login(user: LoginUserDto): Promise<UserEntity>;
    abstract register(user: RegisterUserDto): Promise<UserEntity>;
}
//# sourceMappingURL=for-datasource-auth.repository.d.ts.map