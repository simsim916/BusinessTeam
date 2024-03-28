import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../axios/actions';

const initialState = {
    user: {
        loginStatus: false,
        loading: false,
        error: null,
        data: [],
    }
};

const basicReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state.user,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state.user,
                loading: false,
                loginStatus: true,
                data: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state.user,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export { basicReducer };