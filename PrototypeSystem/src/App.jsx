import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {SignIn} from './pages/signin'
import {Portal} from './pages/portal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/select-portal' element={<Portal/>} />
      </Routes>
    </Router>
  )
}

export default App
