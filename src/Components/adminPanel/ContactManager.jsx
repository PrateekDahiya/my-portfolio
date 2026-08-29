import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TagInput } from '../ui/TagInput';
import { useToast } from '../ui/Toast';
import './ContactManager.css';

export const ContactManager = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const contact = data.contact || {};

  const [form, setForm] = useState({
    email: contact.email || '',
    phone: contact.phone || '',
    social: contact.social || [],
    emailjs: contact.emailjs || { serviceId: '', templateId: '', publicKey: '' },
  });

  useEffect(() => {
    setForm({
      email: contact.email || '',
      phone: contact.phone || '',
      social: contact.social || [],
      emailjs: contact.emailjs || { serviceId: '', templateId: '', publicKey: '' },
    });
  }, [contact]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  const socialTags = form.social.map(s => `${s.label}|${s.url}`);
  const setSocial = (tags) => change('social', tags.map(t => {
    const [label, url] = t.split('|');
    return { label, url };
  }));

  const save = async () => {
    try {
      await updateSection('contact', form);
      show('Contact info saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save contact info', 'error');
    }
  };

  return (
    <section className="contact-manager">
      <header className="manager-header"><h2>Contact & Social</h2></header>

      <Input label="Email" value={form.email} onChange={e=>change('email',e.target.value)} required />
      <Input label="Phone" value={form.phone} onChange={e=>change('phone',e.target.value)} />

      <div className="field-group">
        <label>Social links (Label|URL)</label>
        <TagInput value={socialTags} onChange={setSocial} placeholder="LinkedIn|https://linkedin.com/in/you" />
      </div>

      <h3>EmailJS Configuration</h3>
      <Input label="Service ID" value={form.emailjs.serviceId} onChange={e=>change('emailjs', {...form.emailjs, serviceId:e.target.value})} />
      <Input label="Template ID" value={form.emailjs.templateId} onChange={e=>change('emailjs', {...form.emailjs, templateId:e.target.value})} />
      <Input label="Public Key" value={form.emailjs.publicKey} onChange={e=>change('emailjs', {...form.emailjs, publicKey:e.target.value})} />

      <div className="editor-actions">
        <Button variant="primary" onClick={save}>Save Contact</Button>
      </div>
    </section>
  );
};