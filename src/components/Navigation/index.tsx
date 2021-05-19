import React, { useState } from 'react';
import Button from '../Button';

import styles from './styles.module.scss';

const Navigation: React.FC = () => {
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [isCompanySelected, setIsCompanySelected] = useState(false);
  const [isConnectSelected, setIsConnectSelected] = useState(false);


  const toggleProductDropMenu = () => {
    setIsProductSelected(!isProductSelected);
    setIsCompanySelected(false);
    setIsConnectSelected(false);
  }

  const toggleCompanyDropMenu = () => {
    setIsCompanySelected(!isCompanySelected);
    setIsProductSelected(false);
    setIsConnectSelected(false);
  }

  const toggleConnectDropMenu = () => {
    setIsConnectSelected(!isConnectSelected);
    setIsProductSelected(false);
    setIsCompanySelected(false);
  }

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Blogr" />
      <input type="checkbox" id="menu_hamburger" className={styles.input} />
      <label htmlFor="menu_hamburger" className={styles.menuIcon}>
        <img src="/icon-hamburger.svg" alt="menu" />
      </label>

      <nav>
        <div className={styles.navItems} onClick={toggleProductDropMenu}>
          <a href="#">
            Product
            <span className={!isProductSelected && styles.rotateArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>
          </a>
          <div className={isProductSelected ? styles.dropMenuOpen : styles.dropMenuClosed}>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
        </div>
        <div className={styles.navItems} onClick={toggleCompanyDropMenu}>
          <a href="#">
            Company
            <span className={!isCompanySelected && styles.rotateArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>
          </a>
          <div className={isCompanySelected ? styles.dropMenuOpen : styles.dropMenuClosed}>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className={styles.navItems} onClick={toggleConnectDropMenu}>
          <a href="#">
            Connect
            <span className={!isConnectSelected && styles.rotateArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </span>

          </a>
          <div className={isConnectSelected ? styles.dropMenuOpen : styles.dropMenuClosed}>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className={styles.credentials}>
          <a href="#">Login</a>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navigation;
