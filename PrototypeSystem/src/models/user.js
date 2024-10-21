import {auth, provider} from '../services/auth';
import {signInWithPopup} from "firebase/auth";

class User {
    constructor() {
        this.user = null;
    }

    getUser() {
        return this.user;
    }

    async signInWithGoogle() {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;

        console.log('User signed in:', this.user);
    }
}

export default User;
