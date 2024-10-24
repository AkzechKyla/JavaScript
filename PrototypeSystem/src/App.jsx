import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SignIn from './pages/signin'
import Portal from './pages/portal'
import Register from './pages/register'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/select-portal' element={<Portal/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
