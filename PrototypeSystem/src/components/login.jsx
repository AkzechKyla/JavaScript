import User from '../models/user';
import { useState } from 'react';

export function LoginButton() {
    const [user, setUser] = useState(null);
    const userInstance = new User();

    const signInWithGoogle = async () => {
        userInstance.signInWithGoogle();
        setUser(userInstance.getUser());
    };

    return(
        <button onClick={signInWithGoogle}>Login with Google</button>
    )
}
