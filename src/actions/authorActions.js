import * as types from './actionTypes';
import authorAPI from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }; /*course === {course:course}*/
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorAPI.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
