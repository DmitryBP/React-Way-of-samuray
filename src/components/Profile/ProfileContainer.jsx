import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/Profile-reducer';

class ProfileContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((respons) => {
      this.props.setUserProfile(respons.data);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.postPage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
