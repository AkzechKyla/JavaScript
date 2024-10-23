import User from '../models/user';
import { useState } from 'react';

export function SignIn() {
    const [user, setUser] = useState(null);
    const userInstance = new User();

    const signInWithGoogle = async () => {
        userInstance.signInWithGoogle();
        setUser(userInstance.getUser());

        if (userInstance.getUserRole() == 'admin') {
            console.log('this is an admin');
        }
    };

    return(
        <div>
            <p>Welcome</p>
            <p>Please log in or sign in below</p>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
    )
}
