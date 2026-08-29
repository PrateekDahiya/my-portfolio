import React from 'react';
import './Card.css';

export const Card = ({ title, children, actions, className = '' }) => (
  <article className={`card ${className}`}>
    {title && <header className="card__header"><h3 className="card__title">{title}</h3></header>}
    <div className="card__body">{children}</div>
    {actions && <footer className="card__footer">{actions}</footer>}
  </article>
);