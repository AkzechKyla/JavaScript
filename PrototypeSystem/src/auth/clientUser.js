import {auth, provider} from '../auth/auth';
import {signInWithPopup} from "firebase/auth";

class ClientUser {
    constructor() {
        this.clientUser = null; // Stores Firebase authenticated user
    }

    getUser() {
        return this.clientUser;
    }

    // Method to sign in with Google and set clientUser
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(auth, provider);
            this.clientUser = result.user;

            console.log('Client user signed in:', this.clientUser);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }
}

export default ClientUser;
