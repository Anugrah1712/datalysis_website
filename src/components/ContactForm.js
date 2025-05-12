/* ✅ FILE: src/components/ContactForm.js */
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input className={styles.input} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className={styles.input} type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <textarea className={styles.textarea} name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} required />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
