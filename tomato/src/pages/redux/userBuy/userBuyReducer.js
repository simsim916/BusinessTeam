import { USERBUY_DATA_REQUEST, USERBUY_DATA_SUCCESS, USERBUY_DATA_FAILURE, SET_USERBUY_DATA } from './actions';

const initialState = {
    userBuy: {
        loading: true,
        data: JSON.parse(sessionStorage.getItem('buy')),
        error: null
    }
};

const userBuyReducer = (state = initialState.userBuy, action) => {
    switch (action.type) {
        case USERBUY_DATA_REQUEST:
            return {
                ...state.buyItem,
                loading: true,
                error: null
            };
        case USERBUY_DATA_SUCCESS:
            return {
                ...state.buyItem,
                loading: false,
                data: action.payload
            };
        case USERBUY_DATA_FAILURE:
            return {
                ...state.buyItem,
                loading: false,
                data: [],
                error: action.payload
            };
        case SET_USERBUY_DATA:
            return {
                ...state.buyItem,
                data: action.payload
            };
        default:
            return state;
    }
};

export { userBuyReducer };