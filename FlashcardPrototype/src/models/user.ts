class User {
    email: string;
    isAdmin: boolean;

    constructor(email: string, isAdmin: boolean = false) {
        this.email = email;
        this.isAdmin = isAdmin;
    }

    isAdminCheck(): boolean {
        return this.isAdmin;
    }
}

export default User;
