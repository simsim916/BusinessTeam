import { USERBUY_DATA_REQUEST, USERBUY_DATA_SUCCESS, USERBUY_DATA_FAILURE, SET_USERBUY_DATA_ITEMLIST, SET_USERBUY_DATA_ADDRESS, SET_USERBUY_DATA_MESSAGE, SET_USERBUY_DATA_NONLOGIN } from './actions';

const initialState = {
    userBuy: {
        loading: true,
        data: {
            itemList: JSON.parse(sessionStorage.getItem('buy')),
            addressCode: 123,
            address1: 'aaa',
            address2: 'bbb',
            order_message : '배송 전 연락바랍니다.'
        },
        error: null,
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
                    addressCode: action.addressCode,
                    address1: action.address1,
                    address2: action.address2
                }
            };
        case SET_USERBUY_DATA_MESSAGE:
            return {
                ...state.buyItem,
                data: {
                    ...state.data,
                    order_message : action.order_message,
                }
            };
        case SET_USERBUY_DATA_NONLOGIN:
            return {
                ...state.buyItem,
                data: {
                    ...state.data,
                    nonLogin : action.nonLogin,
                }
            };
        default:
            return state;
    }
};

export { userBuyReducer };