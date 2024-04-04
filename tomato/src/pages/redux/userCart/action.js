import { api } from '../../../model/model';

export const USERCART_DATA_REQUEST = 'USERCART_DATA_REQUEST';
export const USERCART_DATA_SUCCESS = 'USERCART_DATA_SUCCESS';
export const USERCART_DATA_FAILURE = 'USERCART_DATA_FAILURE';
export const SET_USERCART_DATA = 'USERCART_SET_DATA';
export const GET_USERCART_DATA = 'USERCART_SET_DATA';

export const fetchDataRequest = () => ({
    type: USERCART_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: USERCART_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: USERCART_DATA_FAILURE,
    payload: error
});
export const setUserCart = (data) => ({
    type: SET_USERCART_DATA,
    payload: data
});

export const getUserCart = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('getUserCart : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const getItemListAmount = (url, method, requestData, token, localStorage) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            for (let e of response.data) {
                for (let i of JSON.parse(localStorage)) {
                    if (i.code == e.code) {
                        e.amount = i.amount
                    }
                }
            }
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('fetchData : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};