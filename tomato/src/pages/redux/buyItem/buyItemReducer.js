import { BUYITEMLIST_DATA_REQUEST, BUYITEMLIST_DATA_SUCCESS, BUYITEMLIST_DATA_FAILURE, SET_BUYITEMLIST_DATA } from './actions';

const initialState = {
    buyItem: {
        loading: true,
        data: [],
        error: null
    }
};

const buyItemReducer = (state = initialState.buyItem, action) => {
    switch (action.type) {
        case BUYITEMLIST_DATA_REQUEST:
            return {
                ...state.buyItem,
                loading: true,
                error: null
            };
        case BUYITEMLIST_DATA_SUCCESS:
            return {
                ...state.buyItem,
                loading: false,
                data: action.payload
            };
        case BUYITEMLIST_DATA_FAILURE:
            return {
                ...state.buyItem,
                loading: false,
                data: [],
                error: action.payload
            };
        case SET_BUYITEMLIST_DATA:
            return {
                ...state.buyItem,
                data: action.payload
            };
        default:
            return state;
    }
};

export { buyItemReducer };