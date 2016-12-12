import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses /*same as courses:courses*/
});

export default rootReducer;
