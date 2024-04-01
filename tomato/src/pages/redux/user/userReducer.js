
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './action';
const initialState = {
    user: {
        loading: false,
        error: null,
        data: [],
        id: ''
    }
};

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                id: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export { userReducer };