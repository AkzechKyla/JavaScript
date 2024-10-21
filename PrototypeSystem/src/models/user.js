import {auth, provider} from './services/';
import {signInWithPopup} from "firebase/auth";

class User {
    constructor() {
        this.user = null;
    }

    async signInWithGoogle() {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;

        console.log('User signed in:', this.user);
        return this.user;
    }
}

export default User;
