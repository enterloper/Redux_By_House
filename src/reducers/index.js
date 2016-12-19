import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, /*same as courses:courses*/
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
