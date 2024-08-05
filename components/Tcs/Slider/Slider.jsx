import { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const images = [
  '/assets/image1.jpg',
  '/assets/image2.jpg',
  '/assets/image3.jpg',
]; // Add your image paths here

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slider}>
      <button onClick={goToPreviousSlide} className={styles.button}>‹</button>
      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>
      <button onClick={goToNextSlide} className={styles.button}>›</button>
    </div>
  );
}

export default Slider;
