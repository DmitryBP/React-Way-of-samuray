import { connect } from 'react-redux';
import {
  addPostactionCriater,
  upDateNewPostTextactionCriater,
} from '../../../Redux/Profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return { posts: state.postPage.posts, newPostText: state.postPage.newPostText };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onNewPostText: (text) => {
      let action = upDateNewPostTextactionCriater(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostactionCriater());
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
