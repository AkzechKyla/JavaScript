import ClientUser from '../auth/clientUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const clientUser = new ClientUser();

    const signInWithGoogle = async () => {
        await clientUser.signInWithGoogle();
        const userData = await clientUser.getUserFromDatabase();
        setUser(userData);

        // Redirect based on the user role
        if (userData.hasDualRole()) {
            navigate('/select-portal');
        } else if (userData.isAdmin()) {
            // navigate('/admin-dashboard');
            console.log('admin dashboard');
        } else if (userData.isStudent()) {
            // navigate('/student-dashboard');
            console.log('student dashboard');
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
