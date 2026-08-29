import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { ExperienceForm } from './ExperienceForm';
import { useToast } from '../ui/Toast';
import { useConfirm } from '../ui/ConfirmDialog';
import './ExperienceManager.css';

export const ExperienceManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const confirm = useConfirm();
  const exp = data.experience || { items: [] };
  const [items, setItems] = useState(exp.items || []);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const list = exp.items || [];
    const missingIds = list.some(it => it.id == null);
    if (missingIds) {
      const withIds = list.map((it, i) => it.id == null ? { ...it, id: Date.now() + i } : it);
      setItems(withIds);
      updateSection('experience', { items: withIds }).catch(() => {});
    } else {
      setItems(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exp]);

  const handleSave = async (formData) => {
    let nextItems;
    if (editing && editing.id != null) {
      nextItems = items.map(it => it.id === editing.id ? { ...formData, id: editing.id } : it);
    } else {
      nextItems = [...items, { ...formData, id: Date.now() }];
    }
    try {
      await updateSection('experience', { items: nextItems });
      setItems(nextItems);
      setEditing(null);
      show('Experience saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save experience', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!(await confirm('Delete this experience entry? This cannot be undone.', { title: 'Delete experience' }))) return;
    const nextItems = items.filter(it => it.id !== id);
    try {
      await updateSection('experience', { items: nextItems });
      setItems(nextItems);
      show('Experience deleted', 'success');
    } catch (err) {
      show(err.message || 'Failed to delete experience', 'error');
    }
  };

  const handleEdit = (item) => setEditing(item);
  const handleAdd = () => setEditing({});

  return (
    <section className="experience-manager">
      <header className="manager-header">
        <h2>Experience</h2>
        <Button variant="primary" onClick={handleAdd}>+ Add Experience</Button>
      </header>

      <div className="card-grid">
        {items.map(item => (
          <Card key={item.id} title={item.title} subtitle={item.company}>
            <p className="meta">{item.year}</p>
            <p className="meta">{item.role}</p>
            <p className="meta">{item.location}</p>
            <div className="tags">
              {item.technologies?.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="card-actions">
              <Button size="sm" variant="ghost" onClick={()=>handleEdit(item)}>Edit</Button>
              <Button size="sm" variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="empty">No experience entries yet.</p>}
      </div>

      {editing !== null && (
        <ExperienceForm
          initialData={editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </section>
  );
};