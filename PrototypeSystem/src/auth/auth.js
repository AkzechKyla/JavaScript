import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {app} from '../services/firebase';

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider()

export {auth, provider};
