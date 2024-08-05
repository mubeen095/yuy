import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './PartD.module.css';

const tests = [
  { id: 1, title: 'Part A: Foundation Section', para:'Includes Verbal Ability, Reasoning Ability and Numerical Ability'},
  { id: 2, title: 'TCS Part A: Foundation Section - Test 2', para:'15 Questions for 25 Minutes'},
  { id: 3, title: 'TCS Part A: Foundation Section - Test 3', para:'Programming Questions (Coding Challenges)'},
];

const PartD = () => {
  return (
    <div className={styles.PartDContainer}>
      <h2 className={styles.PartD}>TCS NQT Exam Pattern 2024</h2>
      <Swiper
        spaceBetween={10} // Space between slides
        slidesPerView={3} // Number of slides per view (adjust as needed)
        className={styles.swiperContainer}
      >
        {tests.map(test => (
          <SwiperSlide key={test.id} className={`${styles.testCard} ${test.available ? '' : styles.locked}`}>
            <h3 className='font-bold'>{test.title}</h3>
            <p>{test.para}</p>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartD;
