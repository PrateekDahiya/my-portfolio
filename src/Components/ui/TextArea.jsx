import React from 'react';
import './TextArea.css';

export const TextArea = ({
  label,
  id,
  error,
  helperText,
  required,
  rows = 4,
  className = '',
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={inputId} className="form-field__label">{label}{required && <span className="required">*</span>}</label>}
      <textarea
        id={inputId}
        className={`form-field__textarea ${error ? 'form-field__textarea--error' : ''}`}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="form-field__error">{error}</p>}
      {helperText && !error && <p id={`${inputId}-helper`} className="form-field__helper">{helperText}</p>}
    </div>
  );
};