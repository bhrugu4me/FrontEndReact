import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      &nbsp;
    </div>
    <div style={{textAlign:'center', width:'-webkit-fill-available'}}>
      <h1>Footer</h1>
    </div>
  </footer>
);

export default Footer;
