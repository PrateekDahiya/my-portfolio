import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { usePortfolio } from '../../context/PortfolioContext';
import './AdminLayout.css';

const sections = [
  { key: 'dashboard', label: 'Dashboard', icon: '📊' },
  { key: 'hero', label: 'Hero', icon: '🏠' },
  { key: 'profile', label: 'Profile', icon: '👤' },
  { key: 'about', label: 'About', icon: '📝' },
  { key: 'experience', label: 'Experience', icon: '💼' },
  { key: 'projects', label: 'Projects', icon: '🚀' },
  { key: 'skills', label: 'Skills', icon: '🛠️' },
  { key: 'education', label: 'Education', icon: '🎓' },
  { key: 'achievements', label: 'Achievements', icon: '🏆' },
  { key: 'contact', label: 'Contact', icon: '📇' },
  { key: 'settings', label: 'Settings', icon: '⚙️' },
];

export const AdminLayout = () => {
  const { token, logout } = usePortfolio();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  if (!token) return <Navigate to="/admin/login" replace />;

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="Admin sections">
        <div className="admin-sidebar__brand">
          <span className="brand-icon">⚙️</span>
          <span className="brand-text">Portfolio Admin</span>
        </div>
        <nav className="admin-nav">
          {sections.map(s => (
            <NavLink key={s.key} to={`/admin/${s.key}`} className={({ isActive }) => `admin-nav__link ${isActive ? 'active' : ''}`}>
              <span className="admin-nav__icon">{s.icon}</span>
              <span className="admin-nav__label">{s.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <button className="admin-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Toggle menu">
        ☰
      </button>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Portfolio Admin</h1>
          <div className="admin-header__actions">
            <Button variant="ghost" onClick={() => window.open('/', '_blank')}>Preview</Button>
            <Button variant="secondary" onClick={logout}>Logout</Button>
          </div>
        </header>
        <main className="admin-content" role="main">
          <Outlet />
        </main>
      </div>

      {mobileOpen && <div className="admin-backdrop" onClick={() => setMobileOpen(false)} />}
    </div>
  );
};