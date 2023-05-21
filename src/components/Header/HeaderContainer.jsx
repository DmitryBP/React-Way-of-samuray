import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { chaingeState } from '../../Redux/Auth-reduser';
import Header from './Header';

export function HeaderContainer(props) {
  //запрос
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then((respons) => {
        if (respons.data.resultCode === 0) {
          let {login} = respons.data.data
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
