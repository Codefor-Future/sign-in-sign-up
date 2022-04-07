import './App.css';

// Pages
import Login from './pages/Login';
import Signup from './pages/SignUp';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar />
        <div className='app-container'>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;
