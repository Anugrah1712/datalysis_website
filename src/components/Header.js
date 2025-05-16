/* FILE: src/components/Header.js */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Datalysis</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>🔍</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
