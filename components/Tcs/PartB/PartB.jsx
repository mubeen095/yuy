import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './PartB.module.css';

const tests = [
  { id: 1, title: 'TCS Part B: Foundation Section - Test 1', available: true, free: true },
  { id: 2, title: 'TCS Part B: Foundation Section - Test 2', available: false, free: false },
  { id: 3, title: 'TCS Part B: Foundation Section - Test 3', available: false, free: false },
  { id: 4, title: 'TCS Part B: Foundation Section - Test 4', available: false, free: false },
  { id: 5, title: 'TCS Part B: Foundation Section - Test 5', available: false, free: false }
];

const PartB = () => {
  return (
    <div className={styles.PartBContainer}>
      <h2 className={styles.PartB}>TCS Part B: Advanced Section</h2>
      <Swiper
        spaceBetween={10} // Space between slides
        slidesPerView={4} // Number of slides per view (adjust as needed)
        className={styles.swiperContainer}
      >
        {tests.map(test => (
          <SwiperSlide key={test.id} className={`${styles.testCard} ${test.available ? '' : styles.locked}`}>
            <h3>{test.title}</h3>
            {test.available ? (
              <button className={styles.attemptBtn}>Attempt Now</button>
            ) : (
              <button className={styles.unlockBtn}>Unlock Now</button>
            )}
            {test.free && <span className={styles.freeBadge}>Free</span>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartB;
