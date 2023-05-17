import {
  follow,
  setCurrentPage,
  // setTotalUserCount,
  setUsers,
  togleFeacheng,
  unFollow,
} from '../../Redux/Users-reduser';
import React, { Component } from 'react';
import axios from 'axios';
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
  };
};

class UsersContainer extends Component {
  componentDidMount() {
    this.props.togleFeacheng(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.setUsers(respons.data.items);
        // this.props.setTotalUsersCount(respons.data.totalCount);
        setTimeout(() => {
          this.props.togleFeacheng(false);
        }, 200);
      });
  }
  onPageRender = (p) => {
    this.props.setCurrentPage(p);
    this.props.togleFeacheng(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.setUsers(respons.data.items);
        setTimeout(() => {
          this.props.togleFeacheng(false);
        }, 500);
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
