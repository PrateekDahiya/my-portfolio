import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ProjectForm } from './ProjectForm';
import { useToast } from '../ui/Toast';
import { useConfirm } from '../ui/ConfirmDialog';
import './ProjectsManager.css';

export const ProjectsManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const confirm = useConfirm();
  const proj = data.projects || { items: [] };
  const [items, setItems] = useState(proj.items || []);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const list = proj.items || [];
    const missingIds = list.some(it => it.id == null);
    if (missingIds) {
      const withIds = list.map((it, i) => it.id == null ? { ...it, id: Date.now() + i } : it);
      setItems(withIds);
      updateSection('projects', { items: withIds }).catch(() => {});
    } else {
      setItems(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proj]);

  const handleSave = async (formData) => {
    let nextItems;
    if (editing && editing.id != null) {
      nextItems = items.map(it => it.id === editing.id ? { ...formData, id: editing.id } : it);
    } else {
      nextItems = [...items, { ...formData, id: Date.now() }];
    }
    try {
      await updateSection('projects', { items: nextItems });
      setItems(nextItems);
      setEditing(null);
      show('Project saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save project', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!(await confirm('Delete this project? This cannot be undone.', { title: 'Delete project' }))) return;
    const nextItems = items.filter(it => it.id !== id);
    try {
      await updateSection('projects', { items: nextItems });
      setItems(nextItems);
      show('Project deleted', 'success');
    } catch (err) {
      show(err.message || 'Failed to delete project', 'error');
    }
  };

  return (
    <section className="projects-manager">
      <header className="manager-header">
        <h2>Projects</h2>
        <Button variant="primary" onClick={() => setEditing({})}>+ Add Project</Button>
      </header>

      <div className="card-grid">
        {items.map(item => (
          <Card key={item.id} title={item.title} subtitle={item.technologies}>
            {item.image && <img src={item.image} alt={item.title} className="project-thumb" />}
            <ul className="desc">
              {item.description?.slice(0, 2).map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <div className="card-actions">
              <Button size="sm" variant="ghost" onClick={() => setEditing(item)}>Edit</Button>
              {item.links?.[0]?.url && <Button size="sm" variant="ghost" onClick={() => window.open(item.links[0].url, '_blank')}>Preview</Button>}
              <Button size="sm" variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="empty">No projects yet.</p>}
      </div>

      {editing !== null && (
        <ProjectForm
          initialData={editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </section>
  );
};