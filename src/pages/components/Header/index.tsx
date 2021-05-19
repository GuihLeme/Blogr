import React from 'react';
import Button from '../../../components/Button';
import Navigation from '../../../components/Navigation';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <>
    <section className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.content}>
          <h1>A Modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className={styles.ctaButtons}>
            <Button>Start for Free</Button>
            <button className={styles.buttonLM}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header;
