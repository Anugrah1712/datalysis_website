/* ✅ FILE: src/components/Footer.js */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/about" className={styles.link}>About</Link>
      <Link to="/services" className={styles.link}>Services</Link>
      <Link to="/contact" className={styles.link}>Contact</Link>
    </div>
    <p className={styles.copy}>© 2025 Datalysis. All rights reserved.</p>
  </footer>
);

export default Footer;
