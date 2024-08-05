import Image from 'next/image';
import styles from './FeedbackSection.module.css';

function FeedbackSection() {
  const feedbackData = [
    {
      image: '/assets/dipak.jpg',
      text: 'SkillGarage placement preparation product helped me crack TCS.',
      name: 'Data Analyst',
    },
    {
      image: '/assets/shashank.jpg',
      text: 'The placement preparation test helped me.',
      name: 'Software Engineer',
    },
    {
      image: '/assets/namrata.jpg',
      text: 'Thanks to SkillGarage for making these Placement preparations.',
      name: 'Software Engineer',
    },
  ];

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.feedbackWrapper}>
        {feedbackData.map((feedback, index) => (
          <div key={index} className={styles.feedbackCard}>
            <Image
              src={feedback.image}
              alt={feedback.name}
              width={150}
              height={150}
              className={styles.image}
            />
            <p className={styles.text}>{feedback.text}</p>
            <p className={styles.name}>- {feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSection;
