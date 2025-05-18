/* ✅ FILE: src/pages/Contact.js */
import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';  
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contactPage}>
    <div className={styles.contactInfo}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.detail}>📍 Pune, Maharashtra, India</p>
      <p className={styles.detail}>📧 datalysis.india@gmail.com</p>
      <p className={styles.detail}>📞 +91 - 7984885953</p>

      
      <div className={styles.mapSection}>
        <GoogleMap />
      </div>
    </div>
    <ContactForm />
  </div>
);

export default Contact;

