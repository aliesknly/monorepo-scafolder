export declare class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    constructor(name: string, email: string, password: string, role: string);
    static create(object: {
        [key: string]: any;
    }): [string?, CreateUserDto?];
}
//# sourceMappingURL=create-user.dto.d.ts.map