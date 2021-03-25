import { userConstants } from '../constants/userConstants';
//import { userService } from '../services/userService';

export const userActions = {
    fetchUserInfos
};

export function fetchUserInfos() {

    let token = "";

    return dispatch => {
        dispatch(request());

        token = tokenService.login()
        
        if (token !== null)
            dispatch(success(token));
        else
            dispatch(failure("No token..."));
    };

    function request(token) { return { type: tokenConstants.TOKEN_REQUEST, token } }
    function success(token) { return { type: tokenConstants.TOKEN_SUCCESS, token } }
    function failure(error) { return { type: tokenConstants.TOKEN_FAILURE, error } }
}

export function logout() {
    return dispatch => {
        dispatch(logout());
    }

    function logout() { return { type: tokenConstants.TOKEN_LOGOUT } }
}