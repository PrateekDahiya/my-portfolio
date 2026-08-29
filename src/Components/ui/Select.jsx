import React from 'react';
import './Select.css';

export const Select = ({
  label,
  id,
  value,
  onChange,
  options = [],
  required,
  className = '',
  ...props
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={selectId} className="form-field__label">{label}{required && <span className="required">*</span>}</label>}
      <select
        id={selectId}
        className="form-field__select"
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};