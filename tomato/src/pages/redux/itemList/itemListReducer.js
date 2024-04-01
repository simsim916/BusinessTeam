import { ITEMLIST_DATA_REQUEST, ITEMLIST_DATA_SUCCESS, ITEMLIST_DATA_FAILURE } from './actions';

const initialState = {
    itemList: {
        loading: true,
        data: [],
        error: null
    }
};

const itemListReducer = (state = initialState.itemList, action) => {
    switch (action.type) {
        case ITEMLIST_DATA_REQUEST:
            return {
                ...state.itemList,
                loading: true,
                error: null
            };
        case ITEMLIST_DATA_SUCCESS:
            return {
                ...state.itemList,
                loading: false,
                data: action.payload
            };
        case ITEMLIST_DATA_FAILURE:
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