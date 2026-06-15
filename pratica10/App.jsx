import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Faltas from './pages/Faltas/Faltas';
import Notas from './pages/Notas/Notas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm/RequerimentoForm';
import Login from './pages/Login/Login';

const PrivateRoute = ({ children }) => {
  const { usuario } = useAuth();
  return usuario ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="faltas" element={<PrivateRoute><Faltas /></PrivateRoute>} />
        <Route path="notas" element={<PrivateRoute><Notas /></PrivateRoute>} />
        <Route path="boletos" element={<PrivateRoute><Boletos /></PrivateRoute>} />
        <Route path="requerimentos" element={<PrivateRoute><Requerimentos /></PrivateRoute>} />
        <Route path="requerimentos/novo" element={<PrivateRoute><RequerimentoForm /></PrivateRoute>} />
      </Route>
    </Routes>
  );
};

export default App;