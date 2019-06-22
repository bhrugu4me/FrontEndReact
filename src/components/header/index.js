import React from 'react';
import styles from './header.module.scss';
import logo from '../../images/logo.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} width="100" />
    </div>
    <div style={{ textAlign: 'center', width: '-webkit-fill-available' }}>
      <h1>Header</h1>
    </div>
  </header>
);

export default Header;
