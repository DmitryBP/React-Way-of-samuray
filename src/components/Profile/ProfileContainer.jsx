import React, { useEffect } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/Profile-reducer';
import { useParams } from 'react-router-dom';

const ProfileContainer = (props) => {
  let { userId } = useParams();
  useEffect((props) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((respons) => {
      props.setUserProfile(respons.data);
    });
  }, [userId]);

  return (
    <div>
      <Profile {...props} profile={props.profile} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.postPage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
