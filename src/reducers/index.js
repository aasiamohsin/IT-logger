import { combineReducers } from 'redux';
import LogReducer from './LogReducer';
import DeveloperReducer from './DeveloperReducer';

export default combineReducers({
  log: LogReducer,
  developer: DeveloperReducer,
});
