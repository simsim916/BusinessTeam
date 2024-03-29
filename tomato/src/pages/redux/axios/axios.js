import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import { api } from '../../../model/model';

export const fetchData = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
            console.log("fetchData : response" + response)
            console.log("fetchData : response.data" + response.data)
        } catch (error) {
            console.log('fetchData' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const requestLogin = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
            sessionStorage.setItem('userInfo', JSON.stringify({
                token: response.data.token,
                username: response.data.username
            }))
            console.log("fetchData - response.data : " + response.data);
        } catch (error) {
            console.log('fetchData - error : ' + error.message);
            dispatch(fetchDataFailure(error.message));
        }
    };
};