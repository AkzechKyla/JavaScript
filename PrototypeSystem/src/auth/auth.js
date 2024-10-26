import {getAuth, OAuthProvider} from "firebase/auth";
import {app} from '../services/firebase';

const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new OAuthProvider('microsoft.com')
provider.setCustomParameters({
    tenant: "iskolarngbayan.pup.edu.ph" // Restrict to PUP domain if applicable
});

export {auth, provider};
