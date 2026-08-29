import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { EducationForm } from './EducationForm';
import { useToast } from '../ui/Toast';
import { useConfirm } from '../ui/ConfirmDialog';
import './EducationManager.css';

export const EducationManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const confirm = useConfirm();
  const edu = data.education || { items: [] };
  const [items, setItems] = useState(edu.items || []);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const list = edu.items || [];
    const missingIds = list.some(it => it.id == null);
    if (missingIds) {
      const withIds = list.map((it, i) => it.id == null ? { ...it, id: Date.now() + i } : it);
      setItems(withIds);
      updateSection('education', { items: withIds }).catch(() => {});
    } else {
      setItems(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edu]);

  const handleSave = async (formData) => {
    let nextItems;
    if (editing && editing.id != null) {
      nextItems = items.map(it => it.id === editing.id ? { ...formData, id: editing.id } : it);
    } else {
      nextItems = [...items, { ...formData, id: Date.now() }];
    }
    try {
      await updateSection('education', { items: nextItems });
      setItems(nextItems);
      setEditing(null);
      show('Education saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save education entry', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!(await confirm('Delete this education entry? This cannot be undone.', { title: 'Delete education entry' }))) return;
    const nextItems = items.filter(it => it.id !== id);
    try {
      await updateSection('education', { items: nextItems });
      setItems(nextItems);
      show('Education deleted', 'success');
    } catch (err) {
      show(err.message || 'Failed to delete education entry', 'error');
    }
  };

  const handleEdit = (item) => setEditing(item);
  const handleAdd = () => setEditing({});

  return (
    <section className="education-manager">
      <header className="manager-header">
        <h2>Education</h2>
        <Button variant="primary" onClick={handleAdd}>+ Add Education</Button>
      </header>

      <div className="card-grid">
        {items.map(item => (
          <Card key={item.id} title={item.degree} subtitle={item.institution}>
            <p className="meta">{item.period}</p>
            {item.details && item.details.map((d,i)=><p key={i} className="meta">{d}</p>)}
            {item.logo && <img src={item.logo} alt={item.institution} className="edu-logo" />}
            <div className="card-actions">
              <Button size="sm" variant="ghost" onClick={()=>handleEdit(item)}>Edit</Button>
              <Button size="sm" variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="empty">No education entries yet.</p>}
      </div>

      {editing !== null && (
        <EducationForm
          initialData={editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </section>
  );
};