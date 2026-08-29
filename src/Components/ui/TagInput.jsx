import React, { useState } from 'react';
import { Button } from './Button';
import './TagInput.css';

export const TagInput = ({ value = [], onChange, placeholder = 'Add tag…', maxTags }) => {
  const [input, setInput] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();
      if (value.includes(newTag)) return;
      if (maxTags && value.length >= maxTags) return;
      onChange([...value, newTag]);
      setInput('');
    }
    if (e.key === 'Backspace' && !input && value.length) {
      onChange(value.slice(0, -1));
    }
  };
  const remove = (tag) => onChange(value.filter(t => t !== tag));
  return (
    <div className="tag-input">
      <div className="tag-input__tags">
        {value.map(tag => (
          <span key={tag} className="tag-input__tag">
            {tag}
            <button type="button" className="tag-input__remove" onClick={() => remove(tag)} aria-label={`Remove ${tag}`}>×</button>
          </span>
        ))}
        <input
          type="text"
          className="tag-input__field"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length ? '' : placeholder}
          aria-label="Tag input"
        />
      </div>
    </div>
  );
};