import React, { useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { TagInput } from '../ui/TagInput';
import { ImageUploader } from '../ui/ImageUploader';
import { useToast } from '../ui/Toast';
import './ProfileEditor.css';

export const ProfileEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const p = data.profile || {};

  const [form, setForm] = React.useState({
    name:      p.name      || '',
    title:     p.title     || '',
    intro:     p.intro     || '',
    email:     p.email     || '',
    phone:     p.phone     || '',
    location:  p.location  || '',
    avatar:    p.avatar    || '',
    resumeUrl: p.resumeUrl || '',
    social:    p.social    || [],
  });

  useEffect(() => {
    setForm({
      name:      p.name      || '',
      title:     p.title     || '',
      intro:     p.intro     || '',
      email:     p.email     || '',
      phone:     p.phone     || '',
      location:  p.location  || '',
      avatar:    p.avatar    || '',
      resumeUrl: p.resumeUrl || '',
      social:    p.social    || [],
    });
  }, [p]);

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
      await updateSection('profile', form);
      show('Profile saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save profile', 'error');
    }
  };

  return (
    <section className="profile-editor">
      <header className="editor-header"><h2>Profile</h2></header>

      <Input label="Name" value={form.name} onChange={e=>change('name',e.target.value)} required />
      <Input label="Professional title" value={form.title} onChange={e=>change('title',e.target.value)} />
      <TextArea label="Short introduction" value={form.intro} onChange={e=>change('intro',e.target.value)} rows={3} />

      <Input label="Email" type="email" value={form.email} onChange={e=>change('email',e.target.value)} />
      <Input label="Phone" value={form.phone} onChange={e=>change('phone',e.target.value)} />
      <Input label="Location" value={form.location} onChange={e=>change('location',e.target.value)} />

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
        <label>Social links <span className="hint">(format: Label|URL|icon)</span></label>
        <TagInput
          value={socialTags}
          onChange={setSocial}
          placeholder="LinkedIn|https://linkedin.com/in/you|linkedin"
        />
      </div>

      <div className="editor-actions">
        <Button variant="primary" onClick={save}>Save Profile</Button>
      </div>
    </section>
  );
};