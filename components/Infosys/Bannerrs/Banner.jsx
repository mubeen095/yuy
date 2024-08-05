import React, { useState } from 'react';
import styles from './Banner.module.css';
import Popup from './popup';

const Banner = () => {
  const [selectedPrice, setSelectedPrice] = useState('599');
  const [showPopup, setShowPopup] = useState(false);

  const handleEnrollClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Infosys Mock Test 2024 - Attempt Free Online Mock Test</h1>
        <p>Prepare for Placements with Skillvertex Infosys Mock tests, Coding Tests and Mock Interviews</p>
        <ul>
          <li>5 Foundation Mock Tests for Infosys Part-A</li>
          <li>5 Advanced Mock Tests for Infosys Part-B</li>
          <li>5 Advanced Coding Tests for Infosys Part-B</li>
          <li>1:1 Mock Interview - Technical & HR</li>
        </ul>
      </div>
      <div className={styles.bannerSidebar}>
        <h2>Placement Prep Elite</h2>
        <p>Includes all 50+ Aptitude Mock Tests & Coding Practice Tests</p>
        <h3>Choose Validity</h3>
        <div className={styles.validityOptions}>
          <label className={styles.optionCard}>
            <input 
              type="radio" 
              name="validity" 
              value="499" 
              onChange={(e) => setSelectedPrice(e.target.value)} 
            />
            <div className={styles.optionContent}>
              <span>1 Month</span>
              <span>_₹499</span>
            </div>
          </label>
          <label className={styles.optionCard}>
            <input 
              type="radio" 
              name="validity" 
              value="599" 
              defaultChecked 
              onChange={(e) => setSelectedPrice(e.target.value)} 
            />
            <div className={styles.optionContent}>
              <span>3 Months</span>
              <span>_₹599</span>
            </div>
          </label>
          <label className={styles.optionCard}>
            <input 
              type="radio" 
              name="validity" 
              value="699" 
              onChange={(e) => setSelectedPrice(e.target.value)} 
            />
            <div className={styles.optionContent}>
              <span>6 Months</span>
              <span>_₹699</span>
            </div>
          </label>
        </div>

        <button className={styles.enrollBtn} onClick={handleEnrollClick}>Enroll Now</button>
      </div>
      {showPopup && <Popup price={selectedPrice} onClose={handleClosePopup} />}
    </div>
  );
}

export default Banner;
