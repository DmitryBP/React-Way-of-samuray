import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from '../../Redux/Auth-reduser';
import LoginForm from './LoginForm';

function Login(props) {
  const hendleData = (data) => {
    props.logIn(data.email, data.password, data.remainMe);
  };
  if(props.isAuth){
   return <Navigate to={'/profile'}/>
  }
  return <LoginForm hendleData={hendleData}/>;
}

const mapPropsToState = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
export default connect(mapPropsToState, { logIn })(Login);
