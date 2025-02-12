export class CreateUserDto {
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
        if (!name)
            return ["name is required", undefined];
        if (!email)
            return ["email is required", undefined];
        if (!password)
            return ["password is required", undefined];
        if (!role)
            return ["role is required", undefined];
        //return data
        return [undefined, new CreateUserDto(name, email, password, role)];
    }
}
