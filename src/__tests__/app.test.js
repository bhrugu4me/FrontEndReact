import React from 'react';
import { shallow } from 'enzyme';
import App from './app.js';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
