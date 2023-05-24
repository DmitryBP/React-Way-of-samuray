import {
  follow,
  getUsers,
  // setTotalUserCount,
  togleActiveBtn,
  unFollow,
} from '../../Redux/Users-reduser';
import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
// import UsersAPIContainer from './UsersAPIContainer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isBtnActive: state.usersPage.isBtnActive,
  };
};
class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageRender = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };
  render() {
    return (
      <>
        <Preloader isFetching={this.props.isFetching} />
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageRender={this.onPageRender}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          isBtnActive={this.props.isBtnActive}
        />
      </>
    );
  }
}
export default connect(mapStateToProps, {
  follow,
  unFollow,
  togleActiveBtn,
  getUsers,
  // setTotalUsersCount: setTotalUserCount,
})(UsersContainer);