import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import './AdminLogin.css';

export const AdminLogin = () => {
  const { login } = usePortfolio();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.username, form.password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login">
      <div className="admin-login__card">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="admin-login__form">
          <Input label="Username" id="username" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} required autoComplete="username" />
          <Input label="Password" id="password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required autoComplete="current-password" />
          {error && <p className="admin-login__error">{error}</p>}
          <Button type="submit" variant="primary" loading={loading} className="admin-login__submit">Sign in</Button>
        </form>
      </div>
    </section>
  );
};