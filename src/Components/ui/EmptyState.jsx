import React from 'react';
import { Button } from './Button';
import './EmptyState.css';

export const EmptyState = ({ illustration = '📭', title, description, actionLabel, onAction }) => (
  <div className="empty-state">
    <div className="empty-state__illustration">{illustration}</div>
    {title && <h3 className="empty-state__title">{title}</h3>}
    {description && <p className="empty-state__desc">{description}</p>}
    {actionLabel && onAction && <Button variant="primary" onClick={onAction}>{actionLabel}</Button>}
  </div>
);