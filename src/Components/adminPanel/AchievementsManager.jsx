import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { AchievementsForm } from './AchievementsForm';
import { useToast } from '../ui/Toast';
import { useConfirm } from '../ui/ConfirmDialog';
import './AchievementsManager.css';

export const AchievementsManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const confirm = useConfirm();
  const ach = data.achievements || { items: [] };
  const [items, setItems] = useState(ach.items || []);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const list = ach.items || [];
    const missingIds = list.some(it => it.id == null);
    if (missingIds) {
      const withIds = list.map((it, i) => it.id == null ? { ...it, id: Date.now() + i } : it);
      setItems(withIds);
      updateSection('achievements', { items: withIds }).catch(() => {});
    } else {
      setItems(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ach]);

  const handleSave = async (formData) => {
    let nextItems;
    if (editing && editing.id != null) {
      nextItems = items.map(it => it.id === editing.id ? { ...formData, id: editing.id } : it);
    } else {
      nextItems = [...items, { ...formData, id: Date.now() }];
    }
    try {
      await updateSection('achievements', { items: nextItems });
      setItems(nextItems);
      setEditing(null);
      show('Achievement saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save achievement', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!(await confirm('Delete this achievement? This cannot be undone.', { title: 'Delete achievement' }))) return;
    const nextItems = items.filter(it => it.id !== id);
    try {
      await updateSection('achievements', { items: nextItems });
      setItems(nextItems);
      show('Achievement deleted', 'success');
    } catch (err) {
      show(err.message || 'Failed to delete achievement', 'error');
    }
  };

  const handleEdit = (item) => setEditing(item);
  const handleAdd = () => setEditing({});

  return (
    <section className="achievements-manager">
      <header className="manager-header">
        <h2>Achievements</h2>
        <Button variant="primary" onClick={handleAdd}>+ Add Achievement</Button>
      </header>

      <div className="card-grid">
        {items.map(item => (
          <Card key={item.id} title={item.title} subtitle={item.description}>
            {item.date && <p className="meta">Date: {item.date}</p>}
            {item.issuer && <p className="meta">Issuer: {item.issuer}</p>}
            {item.certificateUrl && <a href={item.certificateUrl} target="_blank" rel="noopener" className="meta">Certificate</a>}
            {item.image && <img src={item.image} alt={item.title} className="ach-img" />}
            <div className="card-actions">
              <Button size="sm" variant="ghost" onClick={()=>handleEdit(item)}>Edit</Button>
              <Button size="sm" variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="empty">No achievements yet.</p>}
      </div>

      {editing !== null && (
        <AchievementsForm
          initialData={editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </section>
  );
};