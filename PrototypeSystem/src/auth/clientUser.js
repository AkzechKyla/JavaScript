import {auth, provider} from '../auth/auth';
import {signInWithPopup} from "firebase/auth";

class ClientUser {
    constructor() {
        this.firebaseUser = null; // Stores Firebase authenticated user
    }

    getUser() {
        return this.firebaseUser;
    }

    // Method to sign in with Google and set firebaseUser
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(auth, provider);
            this.firebaseUser = result.user;

            console.log('Client user signed in:', this.firebaseUser);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }
}

export default ClientUser;
