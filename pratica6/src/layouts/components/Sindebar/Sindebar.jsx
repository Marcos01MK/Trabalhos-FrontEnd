import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', to: '/' },
    { label: 'Faltas', to: '/faltas' },
    { label: 'Notas', to: '/notas' },
    { label: 'Boletos', to: '/boletos' },
    { label: 'Requerimentos', to: '/requerimentos' },
    { label: 'Sair', to: '/sair' },
  ];

  return (
    <nav className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo Aluno Online" />
        <h1>Aluno Online</h1>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;