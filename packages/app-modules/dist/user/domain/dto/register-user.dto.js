export class RegisterUserDto {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static register(object) {
        const { name, email, password } = object;
        //evaluation of the existence of the fields
        if (!name)
            return ["name is required", undefined];
        if (!email)
            return ["email is required", undefined];
        if (!password)
            return ["password is required", undefined];
        //return data
        return [undefined, new RegisterUserDto(name, email, password)];
    }
}
