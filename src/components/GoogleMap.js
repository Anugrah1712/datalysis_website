import React from 'react';
import styles from './GoogleMap.module.css';

const GoogleMap = () => (
  <div className={styles.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.899386245822!2d73.81481451536263!3d18.5204304053314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf96e2d85d7f%3A0x3f96d8c49756b77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1628750285079!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Datalysis Pune"
    ></iframe>
  </div>
);

export default GoogleMap;
