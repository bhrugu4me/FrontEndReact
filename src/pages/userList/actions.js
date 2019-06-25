import { GET_ALL_USERS } from './action-types';
import { getUsers } from './api';

export function getUserList() {
	return async dispatch => {
		const users = await getUsers();
		if (users.status === 200) {
			dispatch(updateUsers(users.data.Brastlewark));
		}
	};
}

function updateUsers(_data) {
	return {
		type: GET_ALL_USERS,
		payload: _data
	};
}
