import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  const text = 'Product Engineering · Consulting · SaaS Tools · Business Automation · Strategy · Software Architecture · Product Engineering · Consulting · SaaS Tools · Business Automation · Strategy · Software Architecture';

  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeContent} onMouseEnter={(e) => {
        e.currentTarget.style.animationPlayState = 'paused';
      }} onMouseLeave={(e) => {
        e.currentTarget.style.animationPlayState = 'running';
      }}>
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </div>
    </section>
  );
};

export default Marquee;
