import React from 'react';
import './Card.css';

const Card = ({ title, children, variant = 'default' }) => {
  return (
    <div className={`card ${variant}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;