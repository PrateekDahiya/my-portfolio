import React, { useEffect } from 'react';
import { Button } from './Button';
import './Modal.css';

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={`modal modal--${size}`} onClick={e => e.stopPropagation()}>
        <header className="modal__header">
          <h2 id="modal-title" className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};