import { api } from '../../../model/model';

export const USERBUY_DATA_REQUEST = 'USERBUY_DATA_REQUEST';
export const USERBUY_DATA_SUCCESS = 'USERBUY_DATA_SUCCESS';
export const USERBUY_DATA_FAILURE = 'USERBUY_DATA_FAILURE';
export const SET_USERBUY_DATA_ITEMLIST = 'SET_USERBUY_DATA_ITEMLIST';
export const SET_USERBUY_DATA_ADDRESS = 'SET_USERBUY_DATA_ADDRESS';

export const fetchDataRequest = () => ({
    type: USERBUY_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: USERBUY_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: USERBUY_DATA_FAILURE,
    payload: error
});
export const setUserBuyItemList = (data) => ({
    type: SET_USERBUY_DATA_ITEMLIST,
    payload: data
});
export const setUserBuyAddress = (obj) => ({
    type: SET_USERBUY_DATA_ADDRESS,
    address_code: obj.address_code,
    address1: obj.address1,
});

export const postUserBuy = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('fetchData : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const setUserBuyStorage = (data) => {
    return (dispatch) => {
        dispatch(setUserBuyItemList(data));
        sessionStorage.setItem('buy', JSON.stringify(data))
    }
}