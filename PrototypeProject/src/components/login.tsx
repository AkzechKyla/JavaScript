import { auth, provider, signInWithPopup} from '../services/firebase';

export function LoginButton() {
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          console.log(result.user); // User info is available here
        } catch (error) {
          console.error("Error signing in with Google: ", error);
        }
    };

    return (
        <button onClick={signInWithGoogle}>Login with Google</button>
    )
}
