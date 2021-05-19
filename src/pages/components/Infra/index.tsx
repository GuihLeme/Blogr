import React from 'react';

import styles from './styles.module.scss';

const Infra: React.FC = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <h2>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
          <img src="/illustration-phones.svg" alt="phones" />
        </div>
      </section>
    </>
  )
}

export default Infra;
