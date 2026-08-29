import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { ImageUploader } from '../ui/ImageUploader';
import { Modal } from '../ui/Modal';
import { Select } from '../ui/Select';
import './SkillForm.css';

export const SkillForm = ({ initialData = {}, onSave, onCancel }) => {
  const [form, setForm] = useState({
    name: initialData.name || '',
    url: initialData.url || '',
    description: initialData.description || '',
    logo: initialData.logo || '',
    category: initialData.category || 'Languages',
  });

  useEffect(() => {
    setForm({
      name: initialData.name || '',
      url: initialData.url || '',
      description: initialData.description || '',
      logo: initialData.logo || '',
      category: initialData.category || 'Languages',
    });
  }, [initialData]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  const categories = ['Languages', 'Frontend', 'Backend', 'Databases', 'Cloud & DevOps', 'Tools & Others'];

  return (
    <Modal isOpen title={initialData.id ? 'Edit Skill' : 'Add Skill'} onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <Input label="Skill Name" value={form.name} onChange={e=>change('name',e.target.value)} required />
        <Input label="URL (official site)" value={form.url} onChange={e=>change('url',e.target.value)} />
        <TextArea label="Description" value={form.description} onChange={e=>change('description',e.target.value)} rows={2} />
        <Select label="Category" value={form.category} onChange={e=>change('category',e.target.value)} options={categories.map(c=>({value:c,label:c}))} />
        <div className="field-group">
          <label>Logo</label>
          <ImageUploader value={form.logo} onChange={v=>change('logo',v)} />
        </div>
        <div className="editor-actions">
          <Button type="submit" variant="primary">Save</Button>
          <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};