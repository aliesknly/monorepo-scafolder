export class LoginUserDto {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static login(object) {
        const { email, password } = object;
        //evaluation of the existence of the fields
        if (!password)
            return ["password is required", undefined];
        if (!email)
            return ["email is required", undefined];
        //return data
        return [undefined, new LoginUserDto(email, password)];
    }
}
