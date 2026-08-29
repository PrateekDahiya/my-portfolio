import React from 'react';
import './Spinner.css';

export const Spinner = ({ size = 'md' }) => (
  <span className={`spinner spinner--${size}`} aria-hidden="true"></span>
);