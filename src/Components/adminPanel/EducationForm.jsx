import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { ImageUploader } from '../ui/ImageUploader';
import { Modal } from '../ui/Modal';
import './EducationForm.css';

export const EducationForm = ({ initialData = {}, onSave, onCancel }) => {
  const [form, setForm] = useState({
    degree: initialData.degree || '',
    institution: initialData.institution || '',
    period: initialData.period || '',
    details: initialData.details || [],
    logo: initialData.logo || '',
  });

  useEffect(() => {
    setForm({
      degree: initialData.degree || '',
      institution: initialData.institution || '',
      period: initialData.period || '',
      details: initialData.details || [],
      logo: initialData.logo || '',
    });
  }, [initialData]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  // details repeater
  const addDetail = () => setForm(f => ({ ...f, details: [...f.details, ''] }));
  const removeDetail = (i) => setForm(f => ({ ...f, details: f.details.filter((_,idx)=>idx!==i) }));
  const setDetail = (i, val) => setForm(f => { const d=[...f.details]; d[i]=val; return {...f, details:d}; });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal isOpen title={initialData.id ? 'Edit Education' : 'Add Education'} onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <Input label="Degree" value={form.degree} onChange={e=>change('degree',e.target.value)} required />
        <Input label="Institution" value={form.institution} onChange={e=>change('institution',e.target.value)} required />
        <Input label="Period (e.g., 2022-2026)" value={form.period} onChange={e=>change('period',e.target.value)} />
        <div className="field-group">
          <label>Details (one per line)</label>
          {form.details.map((d,i)=>(
            <div key={i} className="repeater-row">
              <Input value={d} onChange={e=>setDetail(i,e.target.value)} placeholder={`Detail ${i+1}`} />
              <Button size="sm" variant="danger" onClick={()=>removeDetail(i)}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={addDetail}>+ Add Detail</Button>
        </div>

        <div className="field-group">
          <label>Institution Logo</label>
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