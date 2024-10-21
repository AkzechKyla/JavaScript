import {auth, provider, signInWithPopup} from '../services/auth'

export function LoginButton() {
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          console.log(result.user);
        } catch (error) {
          console.error("Error signing in with Google: ", error);
        }
    };

    return(
        <button onClick={signInWithGoogle}>Login with Google</button>
    )
}
