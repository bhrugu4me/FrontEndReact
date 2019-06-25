import { connect } from 'react-redux';
import UserList from './userList';
import { getUserList } from './actions';

const mapStateToProps = state => {
	return {
		users: state.userReducer.users
	};
};

const mapDispatchToProps = dispatch => ({
	getUserList: () => dispatch(getUserList())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
