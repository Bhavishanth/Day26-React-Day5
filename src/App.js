import React from 'react';
import './App.css'
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App1'>
     <h2>CRUD Operation</h2>

    

    <BrowserRouter>
    <h3>Click Here to Add Your Entry: <Link to='/Create'>Create</Link> </h3>

    <Routes>
      <Route path="/Create" element={<Create />}></Route>
      <Route path="/Read" element={<Read />}></Route>
      <Route path="/Update" element={<Update />}></Route>
    </Routes>
    </BrowserRouter>    
      </div>
  )
}

export default App