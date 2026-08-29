import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { TagInput } from '../ui/TagInput';
import { ImageUploader } from '../ui/ImageUploader';
import { Modal } from '../ui/Modal';
import './ExperienceForm.css';

export const ExperienceForm = ({ initialData = {}, onSave, onCancel }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    company: initialData.company || '',
    type: initialData.type || '',
    location: initialData.location || '',
    year: initialData.year || '',
    role: initialData.role || '',
    description: initialData.description || '',
    responsibilities: initialData.responsibilities || [],
    technologies: initialData.technologies || [],
    logo: initialData.logo || '',
  });

  useEffect(() => {
    setForm({
      title: initialData.title || '',
      company: initialData.company || '',
      type: initialData.type || '',
      location: initialData.location || '',
      year: initialData.year || '',
      role: initialData.role || '',
      description: initialData.description || '',
      responsibilities: initialData.responsibilities || [],
      technologies: initialData.technologies || [],
      logo: initialData.logo || '',
    });
  }, [initialData]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal isOpen title={initialData.id ? 'Edit Experience' : 'Add Experience'} onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <Input label="Job Title" value={form.title} onChange={e=>change('title',e.target.value)} required />
        <Input label="Company" value={form.company} onChange={e=>change('company',e.target.value)} required />
        <Input label="Employment Type" value={form.type} onChange={e=>change('type',e.target.value)} />
        <Input label="Location" value={form.location} onChange={e=>change('location',e.target.value)} />
        <Input label="Period (e.g., Jan 2026 - Present)" value={form.year} onChange={e=>change('year',e.target.value)} />
        <Input label="Role" value={form.role} onChange={e=>change('role',e.target.value)} />
        <TextArea label="Description" value={form.description} onChange={e=>change('description',e.target.value)} rows={3} />

        <div className="field-group">
          <label>Responsibilities</label>
          <TagInput value={form.responsibilities} onChange={v=>change('responsibilities', v)} placeholder="Add responsibility" />
        </div>

        <div className="field-group">
          <label>Technologies</label>
          <TagInput value={form.technologies} onChange={v=>change('technologies', v)} placeholder="Add technology" />
        </div>

        <div className="field-group">
          <label>Company Logo</label>
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