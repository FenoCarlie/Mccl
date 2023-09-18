//import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './layout/Content/Content'
import Sidebar from './layout/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter className='app'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
