import React, { Component } from 'react';

import Header from './components/header';
import Error from './components/error';
import Router from './router/router.container';
import styles from './app.module.scss';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Error>
					<div className={styles.row}>
						<div className={styles.column}>
							<Header />
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.column}>
							<Router />
						</div>
					</div>
				</Error>
			</div>
		);
	}
}

export default App;
