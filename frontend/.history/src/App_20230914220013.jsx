//import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/views/container';
import Content from './layout/Content/Content'
import Sidebar from './layout/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter className='app'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/container" element={<Container />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
