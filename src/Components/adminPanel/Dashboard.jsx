import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/EmptyState';
import './Dashboard.css';

export const Dashboard = () => {
  const { data } = usePortfolio();

  const stats = [
    { label: 'Projects', count: data.projects?.items?.length || 0 },
    { label: 'Experience', count: data.experience?.items?.length || 0 },
    { label: 'Skills', count: data.skills?.items?.length || 0 },
    { label: 'Education', count: data.education?.items?.length || 0 },
    { label: 'Achievements', count: data.achievements?.items?.length || 0 },
  ];
  const lastUpdated = data.settings?.updatedAt || data.profile?.updatedAt || '-';

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h2>Dashboard</h2>
        <p>Welcome back! Here's an overview of your portfolio content.</p>
      </header>

      <section className="dashboard__stats" aria-label="Statistics">
        {stats.map(s => (
          <Card key={s.label} className="stat-card">
            <div className="stat-card__value">{s.count}</div>
            <div className="stat-card__label">{s.label}</div>
          </Card>
        ))}
      </section>

      <section className="dashboard__quick-actions" aria-label="Quick actions">
        <h3>Quick Actions</h3>
        <div className="quick-actions__grid">
          <Button variant="primary" onClick={() => window.location.href = '/admin/projects'}>+ Add Project</Button>
          <Button variant="secondary" onClick={() => window.location.href = '/admin/experience'}>+ Add Experience</Button>
          <Button variant="secondary" onClick={() => window.location.href = '/admin/achievements'}>+ Add Achievement</Button>
          <Button variant="ghost" onClick={() => window.location.href = '/admin/profile'}>Edit Profile</Button>
          <Button variant="ghost" onClick={() => window.open('/', '_blank')}>Preview Portfolio</Button>
        </div>
      </section>

      <section className="dashboard__meta">
        <p>Last updated: <strong>{lastUpdated}</strong></p>
      </section>
    </div>
  );
};