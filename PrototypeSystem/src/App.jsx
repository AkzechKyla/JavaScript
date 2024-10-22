import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {LoginButton} from './components/login'
import {SignIn} from './pages/signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/home' element={<LoginButton/>} />
      </Routes>
    </Router>
  )
}

export default App
