import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthStatus } from '../../api/api';
import { chaingeState } from '../../Redux/Auth-reduser';
import Header from './Header';
export function HeaderContainer(props) {
  //запрос
  useEffect(() => {
    getAuthStatus().then((data) => {
      if (data.resultCode === 0) {
        let { login } = data.data;
        props.chaingeState(login);
      }
    });
  });
  return <Header {...props} />;
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
});
export default connect(mapStateToProps, { chaingeState })(HeaderContainer);
