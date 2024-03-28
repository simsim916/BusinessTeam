import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../axios/actions';

const initialState = {
    itemList: {
        loading: false,
        data: [],
        error: null
    },
    user:{
        loading: false,
        data: [],
        error: null
    }
};

const itemListReducer = (state = initialState.itemList, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state.itemList,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state.itemList,
                loading: false,
                data: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state.itemList,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
const userListReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state.itemList,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state.itemList,
                loading: false,
                data: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state.itemList,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export { itemListReducer };