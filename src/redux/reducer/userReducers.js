import { userConstants } from "../constants/userConstants";

function request(userId) {
    return {
        type: userConstants.GET_USER_INFO_REQUEST,
        userId
    }
}

function success(user) {
    return {
        type: userConstants.GET_USER_INFO_SUCCESS,
        user
    }
}

function failure(error) {
    return {
        type: userConstants.GET_USER_INFO_FAILURE,
        error
    }
}