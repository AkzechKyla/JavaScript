import ClientUser from '../auth/clientUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const clientUser = new ClientUser();

    const signInWithGoogle = async () => {
        await clientUser.signInWithGoogle();
        setUser(clientUser.getUser());
        navigate('/select-portal');
    };

    return(
        <div>
            <p>Welcome</p>
            <p>Please log in or sign in below</p>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
    )
}
