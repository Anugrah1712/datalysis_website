import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <h2 className={styles.title}>Datalysis</h2>
      <h3 className={styles.subtitle}>Truly Analytics</h3>
      <p className={styles.tagline}>
        Empowering Businesses & Individuals through Quality Analytics and Data Science Education
      </p>
      <div className={styles.cta}>
        <button className={styles.ctaButton} onClick={() => navigate('/services')}>
          Explore Our Programs
        </button>
        <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>

      <p className={styles.intro}>
        Datalysis India is one of the fastest growing Analytics Education companies, dedicated to empowering individuals and organizations with cutting-edge skills in Analytics and Data Science.
        <br /><br />
        Based in Pune, Maharashtra, we combine education, training, and consultancy to help shape a data-driven future.
      </p>


    </div>
  );
};

export default Home;
