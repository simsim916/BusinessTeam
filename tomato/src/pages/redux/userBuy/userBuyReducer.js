import { USERBUY_DATA_REQUEST, USERBUY_DATA_SUCCESS, USERBUY_DATA_FAILURE, SET_USERBUY_DATA_ITEMLIST, SET_USERBUY_DATA_ADDRESS } from './actions';

const initialState = {
    userBuy: {
        loading: true,
        data: {
            itemList: JSON.parse(sessionStorage.getItem('buy')),
            address_code:'',
            address1:'',
            address2:''
        },
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
        case SET_USERBUY_DATA_ITEMLIST:
            return {
                ...state.buyItem,
                data: {
                    ...state.data,
                    itemList: action.payload
                }
            };
        case SET_USERBUY_DATA_ADDRESS:
            return {
                ...state.buyItem,
                data: {
                    ...state.data,
                    address_code: action.address_code,
                    address1: action.address1,
                    address2: action.address2
                }
            };
        default:
            return state;
    }
};

export { userBuyReducer };