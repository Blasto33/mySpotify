import { tokenConstants } from '../constants/tokenConstants';
import { tokenService } from '../services/tokenService';

export const tokenActions = {
    login,
    logout,
};

export function login() {

    let token = "";

    return dispatch => {
        dispatch(request());

        token = tokenService.login()
        
        if (token !== null)
            dispatch(success(localStorage.getItem('token')));
        else
            dispatch(failure("No token..."));
            /*.then(
                token => { 
                    dispatch(success(token));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            ); */
    };

    function request(token) { return { type: tokenConstants.TOKEN_REQUEST, token } }
    function success(token) { return { type: tokenConstants.TOKEN_SUCCESS, token } }
    function failure(error) { return { type: tokenConstants.TOKEN_FAILURE, error } }
}

function logout() {
    tokenService.logout();
    return { type: tokenConstants.LOGOUT };
}