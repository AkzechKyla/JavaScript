import {auth, provider} from '../auth/auth';
import {signInWithPopup} from "firebase/auth";
import User from '../models/user';

class ClientUser {
    constructor() {
        this.clientUser = null; // Stores Firebase authenticated user
    }

    getUser() {
        return this.clientUser;
    }

    // Method to sign in with Google and set clientUser
    async signIn() {
        try {
            const result = await signInWithPopup(auth, provider);
            this.clientUser = result.user;

            console.log('Client user signed in:', this.clientUser);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }

    // Method to get corresponding User class from the database
    async getUserFromDatabase() {
        if (!this.clientUser) {
            throw new Error("No Firebase user authenticated");
        }

        const email = this.clientUser.email;
        const user = await User.findByEmail(email);
        console.log(user);
        return user;
    }
}

export default ClientUser;
