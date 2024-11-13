import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import SignIn from './pages/signin'
import Portal from './pages/portal'
import Register from './pages/register'
import AdminDashboard from './pages/adminDashboard';


function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path='/sign-in' element={<SignIn setAuthenticatedUser={setAuthenticatedUser} />} />
        <Route path='/select-portal' element={<Portal/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
