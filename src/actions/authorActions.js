import * as types from './actionTypes';
import authorAPI from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }; /*course === {course:course}*/
}

export function loadAuthors() {
  return dispatch => {
    return authorAPI.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
