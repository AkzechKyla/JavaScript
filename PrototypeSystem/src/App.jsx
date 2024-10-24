import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {SignIn} from './pages/signin'
import {Portal} from './pages/portal'
import {Home} from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/select-portal' element={<Portal/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
