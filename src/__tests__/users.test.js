import React from 'react';
import { shallow } from 'enzyme';
import UserList from '../pages/userList';

describe('User List', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<UserList debug />);

		expect(component).toMatchSnapshot();
	});
});
