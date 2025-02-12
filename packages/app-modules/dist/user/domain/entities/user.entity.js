export class UserEntity {
    id;
    name;
    email;
    password;
    role;
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }
}
