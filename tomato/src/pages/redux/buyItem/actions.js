import { api } from '../../../model/model';

export const BUYITEMLIST_DATA_REQUEST = 'BUYITEMLIST_DATA_REQUEST';
export const BUYITEMLIST_DATA_SUCCESS = 'BUYITEMLIST_DATA_SUCCESS';
export const BUYITEMLIST_DATA_FAILURE = 'BUYITEMLIST_DATA_FAILURE';
export const SET_BUYITEMLIST_DATA = 'BUYITEMLIST_SET_DATA';

export const fetchDataRequest = () => ({
    type: BUYITEMLIST_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: BUYITEMLIST_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: BUYITEMLIST_DATA_FAILURE,
    payload: error
});
export const setBuyItemList = (data) => ({
    type: SET_BUYITEMLIST_DATA,
    payload: data
});

export const postBuyItem = (url, method, requestData, token) => {
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
