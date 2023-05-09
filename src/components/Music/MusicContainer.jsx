import { connect } from 'react-redux';
import { addMusicActionCreator, updateNewMusicActionCreator } from '../../Redux/Music-reducer';
import Music from './Music';

const mapStateToProps = (state) => {
  return {
    playList: state.musicPage.playList,
    newArtistText: state.musicPage.newArtistText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickBtn: () => dispatch(addMusicActionCreator()),
    onCheingeText: (text) => dispatch(updateNewMusicActionCreator(text)),
  };
};
const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);
export default MusicContainer;
