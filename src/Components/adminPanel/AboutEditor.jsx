import React, { useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { TagInput } from '../ui/TagInput';
import { useToast } from '../ui/Toast';
import './AboutEditor.css';

export const AboutEditor = () => {
  const { data, updateSection } = usePortfolio();
  const { show } = useToast();
  const a = data.about || {};

  const [form, setForm] = React.useState({
    heading:    a.heading    || '',
    paragraphs: a.paragraphs || [],
    highlights: a.highlights || [],
  });

  useEffect(() => {
    setForm({
      heading:    a.heading    || '',
      paragraphs: a.paragraphs || [],
      highlights: a.highlights || [],
    });
  }, [a]);

  const change = (f, v) => setForm(s => ({ ...s, [f]: v }));

  // Paragraphs helpers
  const addParagraph = () => change('paragraphs', [...form.paragraphs, '']);
  const removeParagraph = (i) => change('paragraphs', form.paragraphs.filter((_, idx) => idx !== i));
  const setParagraph = (i, val) => {
    const next = [...form.paragraphs];
    next[i] = val;
    change('paragraphs', next);
  };

  const save = async () => {
    try {
      await updateSection('about', form);
      show('About section saved', 'success');
    } catch (err) {
      show(err.message || 'Failed to save about section', 'error');
    }
  };

  return (
    <section className="about-editor">
      <header className="editor-header"><h2>About</h2></header>

      <Input label="Heading" value={form.heading} onChange={e=>change('heading',e.target.value)} />

      <div className="field-group">
        <label>Paragraphs</label>
        {form.paragraphs.map((p, i) => (
          <div key={i} className="repeater-row">
            <TextArea
              value={p}
              onChange={e=>setParagraph(i, e.target.value)}
              rows={3}
              placeholder={`Paragraph ${i + 1}`}
            />
            <Button variant="danger" size="sm" onClick={()=>removeParagraph(i)}>Remove</Button>
          </div>
        ))}
        <Button variant="secondary" onClick={addParagraph}>+ Add Paragraph</Button>
      </div>

      <div className="field-group">
        <label>Highlights</label>
        <TagInput value={form.highlights} onChange={v=>change('highlights', v)} placeholder="Add highlight" />
      </div>

      <div className="editor-actions">
        <Button variant="primary" onClick={save}>Save About</Button>
      </div>
    </section>
  );
};