// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TodoHome from './pages/TodoHome';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/task" element={<TodoHome/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
