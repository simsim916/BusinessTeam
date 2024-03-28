import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import { api } from '../../../model/model';

export const fetchData = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            // const response = await api(url, method, requestData, token).then()
            const response = await axios.get('http://localhost:8090/item/allitem');
            console.log(response.data)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('aa')
            dispatch(fetchDataFailure(error.message));
        }
    };
};