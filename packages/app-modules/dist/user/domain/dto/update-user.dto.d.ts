export declare class UpdateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    constructor(name: string, email: string, password: string, role: string);
    static create(object: {
        [key: string]: any;
    }): [string?, UpdateUserDto?];
}
//# sourceMappingURL=update-user.dto.d.ts.map