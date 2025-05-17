/* ✅ FILE: src/pages/Services.js */
import React from 'react';
import styles from './Services.module.css';

const Services = () => (
  <div className={styles.servicesContainer}>
    {/* Analytics & Data Science Education */}
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
      <p className={styles.description}>
        <a 
          href="/Analytics_Data_ScienceEducation.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#00f5ff', textDecoration: 'underline' }}
        >
          📄 All about our Analytics & Data Science Education program
        </a>
      </p>
    </section>

    {/* Corporate Training */}
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
      <p className={styles.description}>
        <a 
          href="/CorporateTraining.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#00f5ff', textDecoration: 'underline' }}
        >
          📄 All about our Corporate Training program
        </a>
      </p>
    </section>

    {/* Consultancy Services */}
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
      <p className={styles.description}>
        <a 
          href="/ConsultancyServices.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#00f5ff', textDecoration: 'underline' }}
        >
          📄 All about our Consultancy Services program
        </a>
      </p>
    </section>

    {/* 1:1 Mentorship */}
    <section className={styles.section}>
      <h2 className={styles.heading}>1:1 Mentorship</h2>
      <p className={styles.description}>
        Our personalized mentorship program connects learners directly with seasoned industry experts for:
        <ul className={styles.list}>
          <li>Career guidance and roadmap building</li>
          <li>Portfolio and resume reviews</li>
          <li>Project feedback and real-world case discussions</li>
          <li>Interview preparation and mock sessions</li>
          <li>Custom learning plans and support</li>
        </ul>
        Ideal for students, professionals, and career changers seeking a tailored growth experience.
      </p>
      <p className={styles.description}>
        <a 
          href="/mentorship.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#00f5ff', textDecoration: 'underline' }}
        >
          📄 Learn more about 1:1 Mentorship at Datalysis
        </a>
      </p>
    </section>
  </div>
);

export default Services;
