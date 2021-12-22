import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './views/Details';
import Home from './views/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Details/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
