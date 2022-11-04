import React from 'react'
import './App.css';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      < div className='App'>
        <Routes>
        <Route exact path='/' element={<Body />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
