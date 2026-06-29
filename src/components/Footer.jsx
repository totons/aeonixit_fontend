import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentRow}>
          <div className={styles.branding}>
            <Link to="/" className={styles.logo}>
              aeonixit
            </Link>
            <p className={styles.tagline}>Software that fits. Solutions that last.</p>
          </div>

          <div className={styles.rightContent}>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.contactInfo}>
              <a href="mailto:ceo@aeonixit.com" className={styles.email}>
                ceo@aeonixit.com
              </a>
              <p className={styles.address}>Kazi Para, Second Road · Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Aeonixit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
