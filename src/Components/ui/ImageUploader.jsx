import React, { useState, useCallback, useRef, useId } from 'react';
import { Button } from './Button';
import { usePortfolio } from '../../context/PortfolioContext';
import './ImageUploader.css';

const API_BASE = process.env.REACT_APP_API_URL || '';

export const ImageUploader = ({ value, onChange, onRemove, accept = 'image/*', maxSizeMB = 5 }) => {
  const { token } = usePortfolio();
  const inputId = useId();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(value || '');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const upload = useCallback(async (file) => {
    if (!file.type.match(/^image\//)) { setError('Only image files are allowed'); return; }
    if (file.size > maxSizeMB * 1024 * 1024) { setError(`File exceeds ${maxSizeMB} MB limit`); return; }
    setError(''); setUploading(true); setProgress(0);
    const form = new FormData();
    form.append('file', file);
    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = e => { if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100)); };
      const res = await new Promise((resolve, reject) => {
        xhr.open('POST', `${API_BASE}/api/upload`);
        if (token) xhr.setRequestHeader('x-admin-token', token);
        xhr.onload = () => resolve({ status: xhr.status, data: JSON.parse(xhr.responseText) });
        xhr.onerror = () => reject(new Error('Network error'));
        xhr.send(form);
      });
      if (res.status !== 200) throw new Error(res.data?.error || 'Upload failed');
      const url = res.data.url;
      setPreview(url);
      onChange(url);
    } catch (err) { setError(err.message); }
    finally { setUploading(false); setProgress(0); }
  }, [onChange, maxSizeMB, token]);

  const handleDrop = (e) => { e.preventDefault(); upload(e.dataTransfer.files[0]); };
  const handleFile = (e) => { if (e.target.files[0]) upload(e.target.files[0]); };
  const remove = () => { setPreview(''); onChange(''); onRemove?.(); };

  return (
    <div className="image-uploader" onDragOver={e=>e.preventDefault()} onDrop={handleDrop}>
      <input ref={fileInputRef} type="file" accept={accept} onChange={handleFile} className="image-uploader__file" id={inputId} />
      {preview ? (
        <div className="image-uploader__preview">
          <img src={preview} alt="preview" />
          <div className="image-uploader__actions">
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>Replace</Button>
            <Button variant="danger" size="sm" onClick={remove}>Remove</Button>
          </div>
        </div>
      ) : (
        <label htmlFor={inputId} className="image-uploader__dropzone">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <p>Drag & drop or click to upload</p>
          <span>{accept} • max {maxSizeMB} MB</span>
        </label>
      )}
      {uploading && <div className="image-uploader__progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><div style={{width: `${progress}%`}}></div></div>}
      {error && <p className="image-uploader__error">{error}</p>}
    </div>
  );
};