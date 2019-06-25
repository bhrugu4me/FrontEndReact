import React from 'react';
import styles from './header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<div style={{ textAlign: 'center' }}>
			<h1>Front End in React - Test App</h1>
		</div>
	</header>
);

export default Header;
