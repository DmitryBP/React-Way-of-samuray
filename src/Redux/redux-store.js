import { combineReducers, legacy_createStore as createStore} from "redux"
import dialogReducer from './Dialog-reduser';
import musicReducer from './Music-reducer';
import newsReducer from './News-reducer';
import profileReducer from './Profile-reducer';
import usersReducer from "./Users-reduser";



let redusers = combineReducers({
  postPage: profileReducer,
  dialogPage: dialogReducer,
  musicPage: musicReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
});

let store = createStore(redusers);

export default store;
