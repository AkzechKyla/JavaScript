import ClientUser from '../auth/clientUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [clientUser, setClientUser] = useState(null);
    const navigate = useNavigate();

    async function signInWithMicrosoft() {
        let signedInUser;

        try {
            signedInUser = await ClientUser.signInWithMicrosoft();
            setClientUser(signedInUser);
        } catch {
            setClientUser(null);  // If sign in failed, set client user as null
        }

        const userData = await signedInUser.getUserFromDatabase();

        // Redirect based on the user role
        if (userData.isAdmin() && userData.isStudent()) {
            navigate('/select-portal');
        } else if (userData.isAdmin()) {
            // navigate('/admin-dashboard');
            console.log('admin dashboard');
        } else if (userData.isStudent()) {
            // navigate('/student-dashboard');
            console.log('student dashboard');
        }
    }

    return(
        <div>
            <p>Welcome</p>
            <p>Please log in or sign in below</p>
            <button onClick={signInWithMicrosoft}>Login with Google</button>
        </div>
    )
}

export default SignIn;
