import './App.css';
import Main from './components/Main';
import Net from './components/Net';
import Disn from './components/Disn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Net" element={<Net />} />
          <Route path="/Disn" element={<Disn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;