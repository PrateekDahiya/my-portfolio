import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SkillForm } from './SkillForm';
import { useToast } from '../ui/Toast';
import { useConfirm } from '../ui/ConfirmDialog';
import './SkillsManager.css';

export const SkillsManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const confirm = useConfirm();
  const skillsData = data.skills || { items: [] };
  const [items, setItems] = useState(skillsData.items || []);
  const [editing, setEditing] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    const list = skillsData.items || [];
    const missingIds = list.some(it => it.id == null);
    if (missingIds) {
      const withIds = list.map((it, i) => it.id == null ? { ...it, id: Date.now() + i } : it);
      setItems(withIds);
      updateSection('skills', { items: withIds }).catch(() => {});
    } else {
      setItems(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsData]);

  const categories = ['Languages', 'Frontend', 'Backend', 'Databases', 'Cloud & DevOps', 'Tools & Others', 'all'];

  const filteredItems = categoryFilter === 'all' ? items : items.filter(i => i.category === categoryFilter);

  const handleSave = async (formData) => {
    let nextItems;
    if (editing && editing.id != null) {
      nextItems = items.map(it => it.id === editing.id ? { ...formData, id: editing.id } : it);
    } else {
      nextItems = [...items, { ...formData, id: Date.now() }];
    }
    try {
      await updateSection('skills', { items: nextItems });
      setItems(nextItems);
      setEditing(null);
      show('Skill saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save skill', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!(await confirm('Delete this skill? This cannot be undone.', { title: 'Delete skill' }))) return;
    const nextItems = items.filter(it => it.id !== id);
    try {
      await updateSection('skills', { items: nextItems });
      setItems(nextItems);
      show('Skill deleted', 'success');
    } catch (err) {
      show(err.message || 'Failed to delete skill', 'error');
    }
  };

  const handleEdit = (item) => setEditing(item);
  const handleAdd = () => setEditing({});

  return (
    <section className="skills-manager">
      <header className="manager-header">
        <h2>Skills</h2>
        <div className="header-actions">
          <select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)} className="category-select">
            {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
          </select>
          <Button variant="primary" onClick={handleAdd}>+ Add Skill</Button>
        </div>
      </header>

      <div className="card-grid">
        {filteredItems.map(item => (
          <Card key={item.id} title={item.name} subtitle={item.category}>
            <p className="meta">{item.description}</p>
            {item.logo && <img src={item.logo} alt={item.name} className="skill-logo" />}
            <div className="card-actions">
              <Button size="sm" variant="ghost" onClick={()=>handleEdit(item)}>Edit</Button>
              <Button size="sm" variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
            </div>
          </Card>
        ))}
        {filteredItems.length === 0 && <p className="empty">No skills in this category.</p>}
      </div>

      {editing !== null && (
        <SkillForm
          initialData={editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </section>
  );
};