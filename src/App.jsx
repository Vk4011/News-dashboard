import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import News from './components/News'
import PerformanceReports from './components/PerformanceReports'
import ManageNews from './components/ManageNews'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/performance-reports" element={<PerformanceReports />} />
          <Route path="/manage-news" element={<ManageNews />} />
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
