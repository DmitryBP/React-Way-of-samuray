import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/Profile-reducer';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../api/api';

function ProfileContainer(props) {
  let { userId } = useParams();
    if (!userId) {
        userId = 2;
    }
  useEffect(() => {
    getProfile(userId).then((respons) => {
      props.setUserProfile(respons.data);
    });
  }, [userId]);
  return (
    <div>
      <Profile {...props} profile={props.profile} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  profile: state.postPage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
