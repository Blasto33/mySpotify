import { uiConstants } from "../constants/uiConstants";

let initialState = {
    pageTitle: "Nothing :3"
}

export default function UI(state = initialState, action) {
    
    switch (action.type) {
        case uiConstants.SET_PAGE_TITLE:
            return {
                ...state,
                pageTitle: action.name
            };
            default:
                return state
    }
}