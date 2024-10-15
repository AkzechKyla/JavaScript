import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Greeting, ShikanokoClub, Button, Gallery, Form} from './TestFunctions.jsx'
import {ShikairoDaysGIF} from './Media.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Greeting />
    <ShikairoDaysGIF />
    <ShikanokoClub />
    <Button text="Click Me!" color="pink" fontSize="24"/>
    <Button text="Don't click me" color="red" fontSize="24"/>
    <App />
    <Gallery />
  </StrictMode>,
)
