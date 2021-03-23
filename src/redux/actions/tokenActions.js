import { tokenConstants } from '../constants/tokenConstants'

export default function setToken(token) {
  return dispatch => {
    dispatch({ type: tokenConstants.SET_USER_TOKEN, token })
  };
}