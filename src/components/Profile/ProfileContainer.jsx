import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../Redux/Profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

function ProfileContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = props.autorizedUserId;
  }
  useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId);
  }, [userId]);
  return (
    <div>
      <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  profile: state.postPage.profile,
  status: state.postPage.status,
  autorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
