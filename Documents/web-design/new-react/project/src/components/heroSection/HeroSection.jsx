import React from 'react';
import mosqueImg from './../../img/categories/mosque.svg';
import quranImg from './../../img/categories/quran.svg';
import readingImg from './../../img/categories/reading.svg';
import styles from './HeroSection.module.css'; 
const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
            <div className={styles.hero_text}>
              <div className={styles.hero_title1}>Everything is possible</div>
              <div className={styles.hero_title2}>IF WITH ALLAH</div> 
              <div className={styles.hero_desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quia esse nihil quaerat. Modi ipsum id suscipit sed omnis veritatis asperiores totam quae, eveniet cumque quod voluptatibus excepturi quo reiciendis.</div>           
            </div>
            <div className={styles.hero_img}>
              <img className={styles.hero_img_mosque} src={mosqueImg} alt="Mosque" />
              <div className={styles.hero_quran_read}>
                <img className={styles.hero_img_quran} src={quranImg} alt="quran" />
                <img className={styles.hero_img_reading} src={readingImg} alt="reading" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;