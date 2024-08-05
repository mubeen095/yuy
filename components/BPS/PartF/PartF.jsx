import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './PartF.module.css';

const tests = [
  { id: 1, title: 'Numerical Ability', para:'This section tests your numerical ability. It consists of 10 questions that you need to answer within 35 minutes.'},
  { id: 2, title: 'Reasoning Ability', para:'This section tests your Reasoning ability and problem-solving skills. It consists of 10 questions that you need to answer within 35 minutes.'},
  { id: 3, title: 'Quantitative Aptitude', para:'This section tests your problem-solving skills. It consists of 30 questions that you need to answer within 35 minutes.'},
];

const PartD = () => {
  return (
    <div className={styles.PartFContainer}>
      <h2 className={styles.PartF}>TCS BPS Exam Pattern 2024</h2>
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
