import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthStatus, logOut } from '../../Redux/Auth-reduser';
import Header from './Header';

export function HeaderContainer(props) {
  useEffect(() => {
    props.getAuthStatus();
  });
  return <Header {...props} />;
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
});
export default connect(mapStateToProps, { getAuthStatus, logOut })(HeaderContainer);
