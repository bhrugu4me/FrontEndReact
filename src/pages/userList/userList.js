import React, { Component } from 'react';
import styles from './userList.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import Modal from 'react-responsive-modal';
import * as Button from '../../components/button';

class UserList extends Component {
	constructor(props) {
		super(props);
		const { getUserList } = this.props;
		getUserList();
		this.state = {
			columns: [
				{
					title: 'Name',
					field: 'name'
				},
				{
					title: 'Age',
					field: 'age'
				},
				{
					title: 'Weight',
					field: 'weight'
				},
				{
					title: 'Height',
					field: 'height'
				},
				{
					title: 'Hair Color',
					field: 'hair_color'
				}
			],
			open: false,
			userDetail: null
		};
	}

	onOpenModal = _userDetail => {
		this.setState({ open: true, userDetail: _userDetail });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};
	render() {
		const { users } = this.props;
		const { columns, open, userDetail } = this.state;
		return (
			<div className={styles.userList}>
				<div>
					<Link to='/'>
						<Button.Default
							text='<< Back'
							type='submit'
							buttonSize={Button.SIZES.LARGE}
						/>
					</Link>
				</div>
				<div className={styles.divTable}>
					<MaterialTable
						title='Brastlewark'
						columns={columns}
						data={users}
						options={{
							search: true,
							actionsColumnIndex: -1
						}}
						actions={[
							{
								icon: 'info',
								tooltip: 'View User',
								onClick: (_event, _rowData) => {
									this.onOpenModal(_rowData);
								}
							}
						]}
					/>
				</div>
				<div>
					<Modal
						open={open}
						onClose={this.onCloseModal}
						center
						animationDuration={1000}
					>
						{userDetail !== null && (
							<div style={{ paddingTop: 30 }} className={styles.divTable}>
								<div style={{ textAlign: 'center', width: '100%' }}>
									<h1 style={{ fontWeight: 700, fontSize: 20 }}>
										Name: {userDetail.name}
									</h1>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										paddingTop: 10
									}}
								>
									<img src={userDetail.thumbnail} height='200' width='200' />
									<div style={{ paddingLeft: 15, fontSize: 18 }}>
										Age: {userDetail.age}
										<br />
										Height: {userDetail.height}
										<br />
										Weight: {userDetail.weight}
										<br />
										Hair Color: {userDetail.hair_color}
										<br />
										{userDetail.professions.length > 0 &&
											'Professions:' + userDetail.professions.join()}
										<br />
										{userDetail.friends.length > 0 &&
											'Friends:' + userDetail.friends.join()}
									</div>
								</div>
							</div>
						)}
					</Modal>
				</div>
				<div>
					<Link to='/'>
						<Button.Default
							text='<< Back'
							type='submit'
							buttonSize={Button.SIZES.LARGE}
						/>
					</Link>
				</div>
			</div>
		);
	}
}

UserList.propTypes = {
	users: PropTypes.array,
	children: PropTypes.any,
	history: PropTypes.any,
	getUserList: PropTypes.func
};

export default UserList;
