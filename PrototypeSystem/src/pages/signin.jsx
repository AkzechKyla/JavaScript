import ClientUser from '../auth/clientUser';
import { useNavigate } from 'react-router-dom';

function SignIn({ setAuthenticatedUser }) {
    const navigate = useNavigate();

    async function signInWithMicrosoft() {
        let signedInUser;
        let userData;

        try {
            signedInUser = await ClientUser.signInWithMicrosoft();

            if (signedInUser) {
                userData = await signedInUser.getUserFromDatabase();
                setAuthenticatedUser(signedInUser);
            }

        } catch {
            setAuthenticatedUser(null);  // If sign in failed, set client user as null
        }

        // Redirect based on the user role
        if (userData.isAdmin() && userData.isStudent()) {
            navigate('/select-portal');
        } else if (userData.isAdmin()) {
            navigate('/admin-dashboard');
        } else if (userData.isStudent()) {
            // navigate('/student-dashboard');
            console.log('student dashboard');
        }
    }

    return(
        <div>
            <p>Welcome</p>
            <p>Please log in or sign in below</p>
            <button onClick={signInWithMicrosoft}>Sign in with PUP Webmail</button>
        </div>
    )
}

export default SignIn;
