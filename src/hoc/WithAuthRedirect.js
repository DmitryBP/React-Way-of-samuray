import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToPropsForRecdirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  function redirectComponent(props) {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  }
  return connect(mapStateToPropsForRecdirect)(redirectComponent);
};
