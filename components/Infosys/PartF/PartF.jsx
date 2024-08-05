import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './PartF.module.css';

const tests = [
  { id: 1, title: 'Numerical Puzzle', para:'This section tests your logical Reasoning ability, Pattern recognition and problem-solving skills. It consists of 4 questions that you need to answer within 35 minutes.'},
  { id: 2, title: 'Reasoning Ability', para:'The Reasoning section evaluates your analytical and logical thinking capabilities. It comprises 15 questions that you have to solve in 25 minutes.'},
  { id: 3, title: 'Verbal Ability', para:'This section test your verbal ability and problem-solving skills.'},
];

const PartD = () => {
  return (
    <div className={styles.PartFContainer}>
      <h2 className={styles.PartF}>Infosys Exam Pattern 2024</h2>
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
