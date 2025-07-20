import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Assignment_1/Login';
import Register from './Assignment_1/Register';
import Dashboard from './Assignment_2/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
