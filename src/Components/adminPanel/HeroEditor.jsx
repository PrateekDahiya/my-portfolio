import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TagInput } from '../ui/TagInput';
import { ImageUploader } from '../ui/ImageUploader';
import { useToast } from '../ui/Toast';
import './ProfileEditor.css';

export const HeroEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const hero = data.hero || {};

  const [form, setForm] = useState({
    name:      hero.name      || '',
    title:     hero.title     || '',
    avatar:    hero.avatar    || '',
    resumeUrl: hero.resumeUrl || '',
    social:    hero.social    || [],
  });

  useEffect(() => {
    setForm({
      name:      hero.name      || '',
      title:     hero.title     || '',
      avatar:    hero.avatar    || '',
      resumeUrl: hero.resumeUrl || '',
      social:    hero.social    || [],
    });
  }, [hero]);

  const change = (field, value) => setForm(f => ({ ...f, [field]: value }));

  // social tags are stored as "Label|URL|icon"
  const socialTags = form.social.map(s => `${s.label}|${s.url}|${s.icon}`);
  const setSocial = (tags) => {
    change('social', tags.map(t => {
      const [label, url, icon] = t.split('|');
      return { label, url, icon };
    }));
  };

  const save = async () => {
    try {
      await updateSection('hero', form);
      show('Hero section saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save hero section', 'error');
    }
  };

  return (
    <section className="profile-editor">
      <header className="editor-header"><h2>Hero</h2></header>

      <Input label="Name" value={form.name} onChange={e=>change('name',e.target.value)} required />
      <Input label="Title" value={form.title} onChange={e=>change('title',e.target.value)} />

      <div className="field-group">
        <label>Avatar</label>
        <ImageUploader value={form.avatar} onChange={v=>change('avatar',v)} />
      </div>

      <Input
        label="Resume URL"
        value={form.resumeUrl}
        onChange={e=>change('resumeUrl',e.target.value)}
        placeholder="https://drive.google.com/file/d/..."
      />

      <div className="field-group">
        <label>Social links <span className="hint">(format: Label|URL|icon — icon: linkedin, instagram, or github)</span></label>
        <TagInput
          value={socialTags}
          onChange={setSocial}
          placeholder="LinkedIn|https://linkedin.com/in/you|linkedin"
        />
      </div>

      <div className="editor-actions">
        <Button variant="primary" onClick={save}>Save Hero</Button>
      </div>
    </section>
  );
};
