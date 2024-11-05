import { useState, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
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
  const dummy  = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25))

  const [messages] = useCollectionData(q, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault(); // dont refresh the page

    const {uid} = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid
    })

    setFormValue('');
    dummy.current.scrollIntoView({behavior: 'smooth'})
  }

  return <>
    <main>
      {messages && messages.map(msg =>
      <ChatMessage key={msg.id} message={msg}/>)}
      <div ref={dummy}></div>
      <SignOut />
    </main>

    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  </>;
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent': 'received';

  return(
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default App
