export class UpdateUserDto {
    name;
    email;
    password;
    role;
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static create(object) {
        const { name, email, password, role } = object;
        //evaluation of the existence of the fields
        return [undefined, new UpdateUserDto(name, email, password, role)];
    }
}
