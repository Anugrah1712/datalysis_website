/* ✅ FILE: src/pages/Services.js */
import React from 'react';
import styles from './Services.module.css';

const Services = () => (
  <div className={styles.servicesContainer}>
    <section className={styles.section}>
      <h2 className={styles.heading}>Analytics & Data Science Education</h2>
      <p className={styles.description}>
        We offer specialized courses and programs in:
      </p>
        <ul className={styles.list}>
          <li>Data Analytics</li>
          <li>Machine Learning</li>
          <li>Python for Data Science</li>
          <li>Business Intelligence Tools</li>
          <li>AI & Big Data Technologies</li>
        </ul>
      <p className={styles.description}>
        Designed for students, working professionals, and career changers.
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>Corporate Training</h2>
      <p className={styles.description}>
        We collaborate with companies to deliver:
        <ul className={styles.list}>
          <li>Customized corporate workshops</li>
          <li>Skill development bootcamps</li>
          <li>On-site and online training programs</li>
          <li>Executive education modules</li>
        </ul>
        Designed to upskill employees and foster a data-driven culture.
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>Consultancy Services</h2>
      <p className={styles.description}>
        Our data science experts help businesses with:
        <ul className={styles.list}>
          <li>Data Strategy Consulting</li>
          <li>Predictive Analytics Projects</li>
          <li>Business Intelligence Dashboards</li>
          <li>Model Deployment & Evaluation</li>
          <li>End-to-end Analytics Solutions</li>
        </ul>
      </p>
    </section>
  </div>
);

export default Services;
