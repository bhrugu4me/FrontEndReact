import SecureRoute from './secure-route';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecureRoute);
