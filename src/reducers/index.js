import { combineReducers } from 'redux';

//import your reducers
import contract from './contract';
import notifications from './notifications';

export default combineReducers({
  contract,
  notifications,
});