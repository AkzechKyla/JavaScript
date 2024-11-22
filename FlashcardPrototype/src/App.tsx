import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizPage from  './pages/quiz';
import SignupForm from './pages/signup'
import SigninForm from './pages/signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignupForm />} />
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App;
