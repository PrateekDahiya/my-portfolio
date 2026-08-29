import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { ImageUploader } from '../ui/ImageUploader';
import { useToast } from '../ui/Toast';
import './SettingsManager.css';

export const SettingsManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const settings = data.settings || {};

  const [form, setForm] = useState({
    siteTitle: settings.siteTitle || '',
    siteDescription: settings.siteDescription || '',
    seoImage: settings.seoImage || '',
    resumeUrl: settings.resumeUrl || '',
  });

  useEffect(() => {
    setForm({
      siteTitle: settings.siteTitle || '',
      siteDescription: settings.siteDescription || '',
      seoImage: settings.seoImage || '',
      resumeUrl: settings.resumeUrl || '',
    });
  }, [settings]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const save = async () => {
    try {
      await updateSection('settings', form);
      show('Settings saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save settings', 'error');
    }
  };

  return (
    <section className="settings-manager">
      <header className="manager-header"><h2>Site Settings</h2></header>

      <Input label="Site Title" value={form.siteTitle} onChange={e=>change('siteTitle',e.target.value)} />
      <TextArea label="Site Description" value={form.siteDescription} onChange={e=>change('siteDescription',e.target.value)} rows={3} />
      <div className="field-group">
        <label>SEO / Social Preview Image</label>
        <ImageUploader value={form.seoImage} onChange={v=>change('seoImage',v)} />
      </div>
      <Input
        label="Global Resume URL"
        value={form.resumeUrl}
        onChange={e=>change('resumeUrl',e.target.value)}
        placeholder="https://drive.google.com/file/d/..."
      />

      <div className="editor-actions">
        <Button variant="primary" onClick={save}>Save Settings</Button>
      </div>
    </section>
  );
};