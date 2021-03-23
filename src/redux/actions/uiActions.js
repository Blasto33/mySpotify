import { uiConstants } from '../constants/uiConstants';

export default function setPageTitle(name) {
  return dispatch => {
    dispatch({ type: uiConstants.SET_PAGE_TITLE, name })
  };
}