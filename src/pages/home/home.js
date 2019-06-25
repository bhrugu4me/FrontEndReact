import React, { Component } from 'react';
import styles from './home.module.scss';
import * as Button from '../../components/button';
import { IconUsers } from '../../components/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.home}>
				<div style={{ paddingTop: '10%' }}>
					<Link to='/user-list'>
						<IconUsers fill='#004a64' width='128px' height='128px' />
						<br />
						<Button.Primary
							text='User List'
							type='submit'
							buttonSize={Button.SIZES.LARGE}
						/>
					</Link>
				</div>
			</div>
		);
	}
}
Home.propTypes = {
	children: PropTypes.any,
	history: PropTypes.any
};

export default Home;
