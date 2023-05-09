import { connect } from 'react-redux';
import { updateAddNewsAcionCreaor, updateNewsActioCreator } from '../../Redux/News-reducer';
import News from './News';

const mapStateToProps = (state) => {
  return {
    newList: state.newsPage.newsList,
    newNewsText: state.newsPage.newNewsText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => dispatch(updateNewsActioCreator(text)),
    onClickBtn: () => dispatch(updateAddNewsAcionCreaor()),
  };
};
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
