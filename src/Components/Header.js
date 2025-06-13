import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
    const navContainer = document.querySelector('.sections-nav-container');
    if (navContainer) {
      navContainer.classList.toggle('is-active');
    }
  };

  return (
    <header className="header">
      <div className="container-fluid-limited d-flex align-items-center justify-content-between">
        <button 
          className={`sections-nav-toggler ${isNavOpen ? 'is-active' : ''}`} 
          onClick={toggleNavigation}
          aria-label="Toggle navigation"
        >
          <span className="sections-nav-toggler-bar"></span>
          <span className="sections-nav-toggler-bar"></span>
          <span className="sections-nav-toggler-bar"></span>
          <span className="sections-nav-toggler-bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
