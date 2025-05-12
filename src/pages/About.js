import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div className={styles.aboutPage}>
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Empowering the Data-Driven Generation</h1>
      <p className={styles.heroSubtitle}>At Datalysis, we believe in hands-on learning, real-world impact, and industry-aligned analytics education.</p>
    </section>

    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2> Our Story</h2>
        <p>
          Since 2019, Datalysis has been redefining Analytics and Data Science education through practical, mentor-driven learning. We combine academic excellence with real-world expertise to empower professionals across India.
        </p>
      </div>

      <div className={styles.card}>
        <h2> Our Team</h2>
        <p>
          Our trainers are seasoned data scientists, educators, and consultants who bring deep domain knowledge and a passion for teaching. We’re committed to helping learners achieve breakthrough success.
        </p>
      </div>

      <div className={styles.card}>
        <h2> Our Values</h2>
        <ul>
          <li>✅ Quality Education</li>
          <li>✅ Practical, Hands-on Learning</li>
          <li>✅ Real-world Relevance</li>
          <li>✅ Personalized Mentorship</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
