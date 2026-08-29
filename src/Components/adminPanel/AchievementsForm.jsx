import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { ImageUploader } from '../ui/ImageUploader';
import { Modal } from '../ui/Modal';
import './AchievementsForm.css';

export const AchievementsForm = ({ initialData = {}, onSave, onCancel }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    date: initialData.date || '',
    issuer: initialData.issuer || '',
    certificateUrl: initialData.certificateUrl || '',
    image: initialData.image || '',
  });

  useEffect(() => {
    setForm({
      title: initialData.title || '',
      description: initialData.description || '',
      date: initialData.date || '',
      issuer: initialData.issuer || '',
      certificateUrl: initialData.certificateUrl || '',
      image: initialData.image || '',
    });
  }, [initialData]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal isOpen title={initialData.id ? 'Edit Achievement' : 'Add Achievement'} onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <Input label="Title" value={form.title} onChange={e=>change('title',e.target.value)} required />
        <TextArea label="Description" value={form.description} onChange={e=>change('description',e.target.value)} rows={2} />
        <Input label="Date" value={form.date} onChange={e=>change('date',e.target.value)} />
        <Input label="Issuer" value={form.issuer} onChange={e=>change('issuer',e.target.value)} />
        <Input label="Certificate URL" value={form.certificateUrl} onChange={e=>change('certificateUrl',e.target.value)} />
        <div className="field-group">
          <label>Image</label>
          <ImageUploader value={form.image} onChange={v=>change('image',v)} />
        </div>
        <div className="editor-actions">
          <Button type="submit" variant="primary">Save</Button>
          <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};