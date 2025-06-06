import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Dados from './pages/Dados';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/dados/:id" element={<Dados />} />
      </Routes>
    </BrowserRouter>
  );
}
