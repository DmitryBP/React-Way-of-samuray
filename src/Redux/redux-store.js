import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import authReduser from "./Auth-reduser";
import dialogReducer from './Dialog-reduser';
import musicReducer from './Music-reducer';
import newsReducer from './News-reducer';
import profileReducer from './Profile-reducer';
import usersReducer from "./Users-reduser";
import thunkMiddleware from 'redux-thunk';



let redusers = combineReducers({
  postPage: profileReducer,
  dialogPage: dialogReducer,
  musicPage: musicReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReduser, // Добавили для того что бы в store появился раздел auth который будет содержать методы редьюсера authReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store


export default store;
