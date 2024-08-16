import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Messages from './components/Messages';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/messages' element={<Messages/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
