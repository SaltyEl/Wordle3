export class User {
    constructor(name, DOB, userName, password) {
        this.name = name;
        this.DOB = DOB;
        this.userName = userName;
        this.password = password;
    }

    set setName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }
}