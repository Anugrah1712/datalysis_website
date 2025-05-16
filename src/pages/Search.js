// FILE: src/pages/Search.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Services.module.css'; // Reuse existing styles

const useQuery = () => new URLSearchParams(useLocation().search);

const Search = () => {
  const query = useQuery().get('q')?.toLowerCase() || '';

  const siteContent = [
    {
      page: 'Home',
      content: 'Welcome to Datalysis, your partner in analytics and data science education.',
      link: '/',
    },
    {
      page: 'About',
      content: 'Datalysis is committed to transforming careers through data-driven skills.',
      link: '/about',
    },
    {
      page: 'Services',
      content: 'We offer corporate training, data science courses, machine learning programs, and AI consulting.',
      link: '/services',
    },
    {
      page: 'Contact',
      content: 'Reach out to Datalysis for collaborations, training, or inquiries.',
      link: '/contact',
    },
  ];

  const results = siteContent.filter(item =>
    item.content.toLowerCase().includes(query)
  );

  return (
    <div className={styles.servicesContainer}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Search Results for: <em>{query}</em></h2>
        {results.length > 0 ? (
          <ul className={styles.list}>
            {results.map((item, index) => (
              <li key={index}>
                <a href={item.link} style={{ color: '#00f5ff' }}>
                  <strong>{item.page}</strong>
                </a>: {item.content}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.description}>
            No results found for "<strong>{query}</strong>".
          </p>
        )}
      </section>
    </div>
  );
};

export default Search;
