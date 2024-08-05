import React, { useState } from 'react';
import styles from './popup.module.css'; // Import the CSS module for Popup

const Popup = ({ price, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to server or display a message
    alert(`Name: ${name}, Email: ${email}, Phone: ${phone}, Price: ₹${price}`);
    onClose();
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <span className={styles.popupCloseIcon} onClick={onClose}>&times;</span>
        <h2>Enroll Now</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" className='text-black-600' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" className='text-black-600' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input type="tel" className='text-black-600' value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label className='text-center'>Price</label>
            <input type="text" className={styles.price} value={`₹${price}`} readOnly />
          </div>
          <button type="submit" className={styles.proceedBtn}>Proceed to Pay</button>
        </form>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
