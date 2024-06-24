import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPageComponent from './components/MainPageComponent/MainPageComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Your component hierarchy */}
      <MainPageComponent />
    </Router>
  )
}

export default App
