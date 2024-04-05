import { api } from '../../../model/model';

export const USERBUY_DATA_REQUEST = 'USERBUY_DATA_REQUEST';
export const USERBUY_DATA_SUCCESS = 'USERBUY_DATA_SUCCESS';
export const USERBUY_DATA_FAILURE = 'USERBUY_DATA_FAILURE';
export const SET_USERBUY_DATA = 'USERBUY_SET_DATA';

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
export const setUserBuy = (data) => ({
    type: SET_USERBUY_DATA,
    payload: data
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
        dispatch(setUserBuy(data));
        sessionStorage.setItem('buy', JSON.stringify(data))
    }
}