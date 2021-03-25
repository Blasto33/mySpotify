import { tokenConstants } from '../constants/tokenConstants';

let token = localStorage.getItem('token');
console.log("token_reducer " + token)

const initialState = token ? { token: token } : {};

export default function authentication(state = initialState, action) {

  switch (action.type) {
    case tokenConstants.TOKEN_REQUEST:
      return {
        loggingIn: true
      };
    case tokenConstants.TOKEN_SUCCESS:
      return {
        token: action.token
      };
    case tokenConstants.TOKEN_FAILURE:
      return {};
    case tokenConstants.TOKEN_LOGOUT:
      return {};
    default:
      return state
  }
}