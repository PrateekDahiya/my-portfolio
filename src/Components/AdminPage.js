import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import './AdminPage.css';

const AdminPage = () => {
  const { data, loading, updateSection, token, login, logout } = usePortfolio();
  const [editSection, setEditSection] = useState(null);
  const [editContent, setEditContent] = useState({});
  const [saved, setSaved] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (editSection && data[editSection]) {
      setEditContent(JSON.parse(JSON.stringify(data[editSection])));
    }
  }, [editSection, data]);

  const handleSave = async () => {
    await updateSection(editSection, editContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setEditSection(null);
  };

  const handleCancel = () => {
    setEditSection(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await login(loginForm.username, loginForm.password);
    } catch (err) {
      setLoginError(err.message);
    }
  };

  if (loading) return <div className="admin-loading">Loading...</div>;

  if (!token) {
    return (
      <section id="admin" className="section admin-section">
        <div className="section-body" style={{maxWidth: '400px', margin: '0 auto'}}>
          <h2 className="section-title">Admin Login</h2>
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={loginForm.username}
                onChange={e => setLoginForm({...loginForm, username: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={loginForm.password}
                onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                required
              />
            </div>
            {loginError && <div className="login-error">{loginError}</div>}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="section admin-section">
      <div className="section-body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
          <h2 className="section-title">Admin Dashboard</h2>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
        {editSection ? (
          <div className="admin-editor">
            <h3>Editing: {editSection}</h3>
            <pre className="json-editor">
              <textarea
                value={JSON.stringify(editContent, null, 2)}
                onChange={e => {
                  try {
                    setEditContent(JSON.parse(e.target.value));
                  } catch (_) {}
                }}
                spellCheck={false}
              />
            </pre>
            <div className="admin-actions">
              <button className="btn btn-primary" onClick={handleSave} disabled={saved}>
                {saved ? 'Saved!' : 'Save'}
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="admin-list">
            <ul>
              {Object.keys(data).map(section => (
                <li key={section}>
                  <span>{section}</span>
                  <button className="btn btn-sm btn-primary" onClick={() => setEditSection(section)}>Edit</button>
                </li>
              ))}
            </ul>
            {Object.keys(data).length === 0 && <p>No content yet. Add sections via DB.</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPage;