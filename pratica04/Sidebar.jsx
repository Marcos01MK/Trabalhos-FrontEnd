import React from 'react';
import './Sidebar.css';

const Sidebar = ({ items }) => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo Aluno Online" />
        <h1>Aluno Online</h1>
      </div>
      <ul className="menu">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;