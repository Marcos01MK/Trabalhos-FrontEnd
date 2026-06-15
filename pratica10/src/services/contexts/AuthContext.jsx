import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUsuarioAutenticado, logout } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const { usuario: usuarioSalvo, token: tokenSalvo } = getUsuarioAutenticado();
    if (usuarioSalvo && tokenSalvo) {
      setUsuario(usuarioSalvo);
      setToken(tokenSalvo);
    }
  }, []);

  const handleLogin = (usuario, token) => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', token);
    setUsuario(usuario);
    setToken(token);
  };

  const handleLogout = () => {
    logout();
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);