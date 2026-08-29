import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Components/Navigation';
import MainContent from './Components/MainContent';
import Header from './Components/Header';
import { AdminLayout } from './Components/adminPanel/AdminLayout';
import { AdminLogin } from './Components/adminPanel/AdminLogin';
import { Dashboard } from './Components/adminPanel/Dashboard';
import { HeroEditor } from './Components/adminPanel/HeroEditor';
import { ProfileEditor } from './Components/adminPanel/ProfileEditor';
import { AboutEditor } from './Components/adminPanel/AboutEditor';
import { ExperienceManager } from './Components/adminPanel/ExperienceManager';
import { ProjectsManager } from './Components/adminPanel/ProjectsManager';
import { SkillsManager } from './Components/adminPanel/SkillsManager';
import { EducationManager } from './Components/adminPanel/EducationManager';
import { AchievementsManager } from './Components/adminPanel/AchievementsManager';
import { ContactManager } from './Components/adminPanel/ContactManager';
import { SettingsManager } from './Components/adminPanel/SettingsManager';
import setupAnimationObserver from './utils/animationObserver';
import './App.css';

function PortfolioLayout() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setupAnimationObserver();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress">
        <div 
          className="scroll-progress-bar" 
          style={{ 
            transform: `scaleY(${scrollProgress / 100})`,
            opacity: scrollProgress > 0 ? 1 : 0
          }}
        />
      </div>
      <Header/>
      <Navigation />
      <div className="main-layout-wrapper">
        <div className="container-fluid-limited main-content-area">
          <div className="row">
            <div className="col col-12">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="hero" element={<HeroEditor />} />
        <Route path="profile" element={<ProfileEditor />} />
        <Route path="about" element={<AboutEditor />} />
        <Route path="experience" element={<ExperienceManager />} />
        <Route path="projects" element={<ProjectsManager />} />
        <Route path="skills" element={<SkillsManager />} />
        <Route path="education" element={<EducationManager />} />
        <Route path="achievements" element={<AchievementsManager />} />
        <Route path="contact" element={<ContactManager />} />
        <Route path="settings" element={<SettingsManager />} />
        <Route path="" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
