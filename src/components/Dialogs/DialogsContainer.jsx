import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import {
  addMessage,
  updateNewMessageText,
} from '../../Redux/Dialog-reduser';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    newMessageText: state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addMessage, updateNewMessageText})
)(Dialogs)
