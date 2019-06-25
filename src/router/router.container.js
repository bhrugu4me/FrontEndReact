import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Router from './router';

// routes
import home from '../pages/home/home.routes';
import userList from '../pages/userList/userList.routes';

export const mapStateToProps = () => ({
  routes: [...home, ...userList]
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Router)
);
