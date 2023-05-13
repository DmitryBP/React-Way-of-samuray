import { connect } from 'react-redux';
import { followAC, setUserAC, unFollowAC } from '../../Redux/Users-reduser';
import Users from './Users';
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unFollow: (userId) => dispatch(unFollowAC(userId)),
    setUsers: (userId) => dispatch(setUserAC(userId)),
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer