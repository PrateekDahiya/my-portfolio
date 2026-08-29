import React, { createContext, useContext, useEffect, useState } from 'react';

const PortfolioContext = createContext();
const API_BASE = process.env.REACT_APP_API_URL || '';

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() => sessionStorage.getItem('adminToken') || null);

  const login = async (username, password) => {
    const res = await fetch(`${API_BASE}/api/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error('Invalid credentials');
    const { token: newToken } = await res.json();
    sessionStorage.setItem('adminToken', newToken);
    setToken(newToken);
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem('adminToken');
    setToken(null);
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then(r => {
        if (!r.ok) throw new Error(`Portfolio fetch failed: ${r.status} ${r.statusText}`);
        return r.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load portfolio data from API:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const settings = data.settings;
    if (!settings) return;
    if (settings.siteTitle) document.title = settings.siteTitle;
    if (settings.siteDescription) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', settings.siteDescription);
    }
  }, [data.settings]);

  const authHeaders = token ? { 'Content-Type': 'application/json', 'x-admin-token': token } : { 'Content-Type': 'application/json' };

  const updateSection = async (section, content) => {
    const res = await fetch(`${API_BASE}/api/portfolio/${section}`, {
      method: 'PUT',
      headers: authHeaders,
      body: JSON.stringify(content)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Failed to save ${section}`);
    }
    setData(prev => ({ ...prev, [section]: content }));
  };

  return (
    <PortfolioContext.Provider value={{ data, loading, updateSection, token, login, logout }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);