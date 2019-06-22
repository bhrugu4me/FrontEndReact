import React, { Component } from 'react';
import styles from './home.module.scss';
import * as Button from '../../components/button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  async logOut() {
    let that = this;
    const { logout } = that.props;
    try {
      await logout();
      that.props.history.push('/login');
    } catch (ex) {
      throw new Error(ex);
    }
  }
  render() {
    const { counter } = this.state;
    const { currentUser } = this.props;
    if (counter === 5) {
      throw new Error('Opss!');
    }

    if (currentUser === undefined || currentUser === null) {
      this.props.history.push('/login');
    }

    return (
      <div className={styles.home}>
        <h1> Home Page </h1>
        <h2>Click(5 times) on Large Primary button to test error Component</h2>
        <div style={{ paddingTop: 10 }}>
          <Button.Primary
            text="Large Primary"
            type="submit"
            onClick={() => {
              this.handleClick();
            }}
            buttonSize={Button.SIZES.LARGE}
          />
          <Link to="/login">
            <Button.Success
              text="Redux Form"
              type="submit"
              onClick={() => {}}
              buttonSize={Button.SIZES.LARGE}
            />
          </Link>
          <Button.Warning
            text="Large Warning"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.LARGE}
          />
          <Button.Danger
            text="Large Danger"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.LARGE}
          />
          <Button.Default
            text="Large Default"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.LARGE}
          />
        </div>
        <div style={{ paddingTop: 10 }}>
          <Button.Primary
            text="Medium Primary"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.MEDIUM}
          />
          <Button.Success
            text="Medium Success"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.MEDIUM}
          />
          <Button.Warning
            text="Medium Warning"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.MEDIUM}
          />
          <Button.Danger
            text="Medium Danger"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.MEDIUM}
          />
          <Button.Default
            text="Medium Default"
            type="submit"
            onClick={() => {}}
            buttonSize={Button.SIZES.MEDIUM}
          />
        </div>
        {currentUser && (
          <div>
            <br />
            <h1>User Information</h1>
            <p>User Name: {currentUser.username}</p>
            <Button.Default
              text="Log Out"
              type="button"
              onClick={() => {
                this.logOut();
              }}
              buttonSize={Button.SIZES.MEDIUM}
            />
          </div>
        )}
      </div>
    );
  }
}
Home.propTypes = {
  currentUser: PropTypes.object,
  children: PropTypes.any,
  history: PropTypes.any,
  logout: PropTypes.func
};

export default withRouter(Home);
