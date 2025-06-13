import React, { useEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import MainContent from './Components/MainContent';
import setupAnimationObserver from './utils/animationObserver';
import './App.css';
import Header from './Components/Header';

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        setupAnimationObserver();

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress))); // Ensure progress is between 0 and 100
        };

        // Initial calculation
        handleScroll();

        // Add scroll event listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Add resize event listener to recalculate on window resize
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []); // Run once on component mount

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

export default App;
