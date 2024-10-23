class User {
    constructor(email, roles = ['student']) {
        this.email = email;
        this.roles = roles;
    }

    // Mock method to simulate fetching user data from the database
    static async findByEmail(email) {
        const mockDatabase = [
            { email: 'kflmorcillos@gmail.com', roles: ['student'] },
            { email: 'clownfish0123@gmail.com', roles: ['admin'] },
            { email: 'fionamorcillos41@gmail.com', roles: ['student', 'admin'] }
        ];

        console.log(email);

        const userData = mockDatabase.find(user => user.email === email);
        if (userData) {
            return new User(userData.email, userData.roles);
        } else {
            throw new Error('User not found in the database');
        }
    }

    // Method to check if the user is a student
    isStudent() {
        return this.roles.includes('student');
    }

    // Method to check if the user is an admin
    isAdmin() {
        return this.roles.includes('admin');
    }
}

export default User;
