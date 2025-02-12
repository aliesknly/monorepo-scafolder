export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
    constructor(email: string, password: string);
    static login(object: {
        [key: string]: any;
    }): [string?, LoginUserDto?];
}
//# sourceMappingURL=login-user.dto.d.ts.map