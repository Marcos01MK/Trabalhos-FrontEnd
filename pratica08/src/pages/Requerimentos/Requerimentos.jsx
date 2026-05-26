import React from 'react';
import { Link } from 'react-router-dom';
import './Requerimentos.css';

const Requerimentos = () => {
  return (
    <div className="requerimentos-container">
      <h1>Meus Requerimentos</h1>
      <Link to="novo" className="novo-requerimento-button">➕ Novo Requerimento</Link>
      <div className="requerimentos-list">
      </div>
    </div>
  );
};

export default Requerimentos;