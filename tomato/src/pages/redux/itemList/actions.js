import { api } from '../../../model/model';

export const ITEMLIST_DATA_REQUEST = 'ITEMLIST_DATA_REQUEST';
export const ITEMLIST_DATA_SUCCESS = 'ITEMLIST_DATA_SUCCESS';
export const ITEMLIST_DATA_FAILURE = 'ITEMLIST_DATA_FAILURE';

export const fetchDataRequest = () => ({
    type: ITEMLIST_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: ITEMLIST_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: ITEMLIST_DATA_FAILURE,
    payload: error
});

export const getItemList = (url, method, requestData, token) => {
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