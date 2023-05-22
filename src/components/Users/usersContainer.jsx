import {
  follow,
  setCurrentPage,
  // setTotalUserCount,
  setUsers,
  togleFeacheng,
  unFollow,
} from '../../Redux/Users-reduser';
import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { usersAPI } from '../../api/api';
// import UsersAPIContainer from './UsersAPIContainer';
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends Component {
  componentDidMount() {
    this.props.togleFeacheng(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      // this.props.setTotalUsersCount(data.totalCount);
      this.props.togleFeacheng(false);
    });
  }
  onPageRender = (p) => {
    this.props.setCurrentPage(p);
    this.props.togleFeacheng(true);
    usersAPI.getUsers(p, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);

      this.props.togleFeacheng(false);
    });
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
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  togleFeacheng,
  // setTotalUsersCount: setTotalUserCount,
})(UsersContainer);
