import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage, default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('aeonixit-theme');
    const shouldBeDark = savedTheme !== 'light'; // Default to dark unless explicitly set to light
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setIsAnimating(true);
    
    if (newIsDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('aeonixit-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('aeonixit-theme', 'light');
    }

    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 250);
  };

  // SVG Icons
  const MoonIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  const SunIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          aeonixit
        </Link>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.link} nav-link-underline ${isActive(link.path) ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isActive(link.path) && <span className={styles.bracket}>[</span>}
                {link.label}
                {isActive(link.path) && <span className={styles.bracket}>]</span>}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.themeToggle} theme-toggle ${isAnimating ? styles.animate : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="theme-toggle-icon">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
