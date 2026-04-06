import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <h2>Olá, Aluno!</h2>
      <div className="user-avatar">
        <img src="/avatar.png" alt="Avatar do usuário" />
      </div>
    </header>
  );
};

export default Topbar;