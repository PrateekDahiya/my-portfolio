import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { TagInput } from '../ui/TagInput';
import { ImageUploader } from '../ui/ImageUploader';
import { Modal } from '../ui/Modal';
import './ProjectForm.css';

export const ProjectForm = ({ initialData = {}, onSave, onCancel }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    subtitle: initialData.subtitle || '',
    shortDescription: initialData.shortDescription || '',
    fullDescription: initialData.fullDescription || '',
    technologies: initialData.technologies || [],
    links: initialData.links || [{ text: 'Live', url: '' }, { text: 'GitHub', url: '' }],
    images: initialData.images || [],
    thumbnail: initialData.thumbnail || '',
    featured: initialData.featured || false,
    displayOrder: initialData.displayOrder || 0,
    date: initialData.date || '',
  });

  useEffect(() => {
    setForm({
      title: initialData.title || '',
      subtitle: initialData.subtitle || '',
      shortDescription: initialData.shortDescription || '',
      fullDescription: initialData.fullDescription || '',
      technologies: initialData.technologies || [],
      links: initialData.links || [{ text: 'Live', url: '' }, { text: 'GitHub', url: '' }],
      images: initialData.images || [],
      thumbnail: initialData.thumbnail || '',
      featured: initialData.featured || false,
      displayOrder: initialData.displayOrder || 0,
      date: initialData.date || '',
    });
  }, [initialData]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const updateLink = (index, field, value) => {
    const next = [...form.links];
    next[index] = { ...next[index], [field]: value };
    change('links', next);
  };

  const addLink = () => change('links', [...form.links, { text: '', url: '' }]);
  const removeLink = (i) => change('links', form.links.filter((_, idx) => idx !== i));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal isOpen size="lg" title={initialData.id ? 'Edit Project' : 'Add Project'} onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <Input label="Project Title" value={form.title} onChange={e=>change('title',e.target.value)} required />
        <Input label="Subtitle" value={form.subtitle} onChange={e=>change('subtitle',e.target.value)} />
        <TextArea label="Short Description" value={form.shortDescription} onChange={e=>change('shortDescription',e.target.value)} rows={2} />
        <TextArea label="Full Description" value={form.fullDescription} onChange={e=>change('fullDescription',e.target.value)} rows={5} />

        <div className="field-group">
          <label>Technologies (comma separated or use tags)</label>
          <TagInput value={form.technologies} onChange={v=>change('technologies', v)} placeholder="React, Node, PostgreSQL" />
        </div>

        <div className="field-group">
          <label>Links</label>
          {form.links.map((link, i) => (
            <div key={i} className="link-row">
              <Input label="Label" value={link.text} onChange={e=>updateLink(i,'text',e.target.value)} placeholder="Live" />
              <Input label="URL" value={link.url} onChange={e=>updateLink(i,'url',e.target.value)} placeholder="https://..." />
              <Button size="sm" variant="danger" onClick={()=>removeLink(i)}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={addLink}>+ Add Link</Button>
        </div>

        <div className="field-group">
          <label>Project Images (multiple)</label>
          <div className="image-upload-grid">
            {form.images.map((img, idx) => (
              <div key={idx} className="image-slot">
                <ImageUploader value={img} onChange={v=>{
                  const next = [...form.images];
                  next[idx] = v;
                  change('images', next);
                }} />
                <Button size="sm" variant="danger" onClick={()=>{
                  const next = form.images.filter((_,j)=>j!==idx);
                  change('images', next);
                }}>Remove</Button>
              </div>
            ))}
            <div className="add-image-slot">
              <ImageUploader onChange={v=>change('images', [...form.images, v])} />
            </div>
          </div>
        </div>

        <div className="field-group">
          <label>Thumbnail</label>
          <ImageUploader value={form.thumbnail} onChange={v=>change('thumbnail',v)} />
        </div>

        <div className="field-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={form.featured}
              onChange={e=>change('featured', e.target.checked)}
            />
            Featured Project
          </label>
        </div>

        <Input label="Display Order" type="number" value={form.displayOrder} onChange={e=>change('displayOrder', parseInt(e.target.value) || 0)} />
        <Input label="Date (Year)" value={form.date} onChange={e=>change('date',e.target.value)} />

        <div className="editor-actions">
          <Button type="submit" variant="primary">Save Project</Button>
          <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};