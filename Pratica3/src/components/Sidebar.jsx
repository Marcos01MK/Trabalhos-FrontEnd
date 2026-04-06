import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo Aluno Online" />
        <h1>Aluno Online</h1>
      </div>
      <ul className="menu">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/faltas">Faltas</a></li>
        <li><a href="/notas">Notas</a></li>
        <li><a href="/boletos">Boletos</a></li>
        <li><a href="/requerimentos">Requerimentos</a></li>
        <li><a href="/sair">Sair</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;