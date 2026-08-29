import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { Button } from './Button';
import './ConfirmDialog.css';

const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const resolveRef = useRef(null);

  const confirm = useCallback((message, opts = {}) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setState({
        message,
        title: opts.title || 'Confirm',
        confirmLabel: opts.confirmLabel || 'Delete',
        cancelLabel: opts.cancelLabel || 'Cancel',
        variant: opts.variant || 'danger',
      });
    });
  }, []);

  const close = (result) => {
    setState(null);
    resolveRef.current?.(result);
    resolveRef.current = null;
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {state && (
        <div className="confirm-overlay" onClick={() => close(false)} role="alertdialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
            <h3 id="confirm-title" className="confirm-dialog__title">{state.title}</h3>
            <p className="confirm-dialog__message">{state.message}</p>
            <div className="confirm-dialog__actions">
              <Button variant="secondary" onClick={() => close(false)}>{state.cancelLabel}</Button>
              <Button variant={state.variant} onClick={() => close(true)}>{state.confirmLabel}</Button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};

export const useConfirm = () => {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error('useConfirm must be used within ConfirmProvider');
  return ctx.confirm;
};
