//import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './layout/Content/Content'
import Sidebar from './layout/Sidebar/Sidebar'

function App() {

  return (
    <div className=''>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
