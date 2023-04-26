import { combineReducers, legacy_createStore as createStore} from "redux"
import dialogReducer from './Dialog-reduser';
import musicReducer from './Music-reducer';
import newsReducer from './News-reducer';
import profileReducer from './Profile-reducer';



let redusers = combineReducers({
  postPage: profileReducer,
  dialogPage: dialogReducer,
  musicPage: musicReducer,
  newsPage: newsReducer,
});

let store = createStore(redusers);

export default store;
