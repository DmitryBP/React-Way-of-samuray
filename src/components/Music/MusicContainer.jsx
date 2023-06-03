import { connect } from 'react-redux';
import { addMusic, updateNewMusic, upDateTag } from '../../Redux/Music-reducer';
import Music from './Music';

const mapStateToProps = (state) => {
  return {
    playList: state.musicPage.playList,
    newArtistText: state.musicPage.newArtistText,
    tag: state.musicPage.tag,
  };
};

export default connect(mapStateToProps, { addMusic, updateNewMusic, upDateTag })(Music);
