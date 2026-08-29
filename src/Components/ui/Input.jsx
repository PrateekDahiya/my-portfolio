import React from 'react';
import './Input.css';

export const Input = ({
  label,
  id,
  type = 'text',
  error,
  helperText,
  required,
  className = '',
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={inputId} className="form-field__label">{label}{required && <span className="required">*</span>}</label>}
      <input
        id={inputId}
        type={type}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="form-field__error">{error}</p>}
      {helperText && !error && <p id={`${inputId}-helper`} className="form-field__helper">{helperText}</p>}
    </div>
  );
};