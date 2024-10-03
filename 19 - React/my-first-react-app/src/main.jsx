import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Greeting, ShikanokoClub} from './TestFunctions.jsx'
import {ShikairoDaysGIF} from './Media.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <ShikairoDaysGIF />
    <ShikanokoClub />
  </StrictMode>,
)
