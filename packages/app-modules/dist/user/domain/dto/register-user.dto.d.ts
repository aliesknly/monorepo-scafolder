export declare class RegisterUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    constructor(name: string, email: string, password: string);
    static register(object: {
        [key: string]: any;
    }): [string?, RegisterUserDto?];
}
//# sourceMappingURL=register-user.dto.d.ts.map