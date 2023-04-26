const ADD_POST = 'ADD-POST';
const UP_DAATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {
      img: 'https://sun1-54.userapi.com/s/v1/if1/0h_JqumO9DvcvBnpIXKnb15tL1Ul9KUA4EIRpUCeWVaS3nxfTSppU7Prfq5xJUSJNDvOzb9X.jpg?size=200x200&quality=96&crop=139,0,437,437&ava=1',
      alt: 'img1',
      post: 'это тестовый пост 1',
      like: 'like 3',
    },
    {
      img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
      alt: 'img2',
      post: 'это тестовый пост 2',
      like: 'like 5',
    },
  ],
  NewPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
        alt: 'img2',
        post: state.NewPostText,
        like: 'like 6',
      };
      state.posts.push(newPost);
      state.NewPostText = '';
      return state;
    case UP_DAATE_NEW_POST_TEXT:
      state.NewPostText = action.NewPostText;
      return state;
    default:
      return state;
  }
};
export const addPostactionCriater = () => ({ type: ADD_POST });
export const upDateNewPostTextactionCriater = (text) => ({
  type: UP_DAATE_NEW_POST_TEXT,
  NewPostText: text,
});

export default profileReducer