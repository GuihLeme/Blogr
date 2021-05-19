import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';


const Button: React.FC = ({children, ...rest}) => {
  return(
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button;


