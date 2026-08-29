import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const base = 'btn';
  const vars = `${base} ${base}--${variant} ${base}--${size} ${className}`.trim();
  return (
    <button
      type={type}
      className={vars}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn__spinner" aria-hidden="true"></span>}
      <span className={loading ? 'btn__label--hidden' : ''}>{children}</span>
    </button>
  );
};