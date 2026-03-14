import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cars from './components/Cars';
import Users from './components/Users';
import Products from './components/Products';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/users' element={<Users />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}

export default App;
