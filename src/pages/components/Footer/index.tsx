import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="Blogr" />
        <div className={styles.navItems}>
          <a href="#">Product</a>
          <div>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
        </div>
        <div className={styles.navItems}>
          <a href="#">Company</a>
          <div>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Carrers</a>
          </div>
        </div>
        <div className={styles.navItems}>
          <a href="#">Connect</a>
          <div>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
