import 'firebase/firestore'
import 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore, collection, query, orderBy, limit } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9NKL8tMjlfltqidV1LNEtVzZs41sRR0",
  authDomain: "chatapp-f8e76.firebaseapp.com",
  projectId: "chatapp-f8e76",
  storageBucket: "chatapp-f8e76.firebasestorage.app",
  messagingSenderId: "899623170851",
  appId: "1:899623170851:web:57fef4a783add0bd809296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header></header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  )
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Log Out</button>
  )
}

function ChatRoom() {
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25))

  const [messages] = useCollectionData(q, {idField: 'id'});

  return <>
    <div>Welcome to the chat!</div>

    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
    </div>

    <SignOut />
  </>;
}

export default App
