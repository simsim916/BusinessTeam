import { SERVER_URL } from "./server-config";
import axios from 'axios';


export async function api(url, method, requestData, token) {

    let headers = '';

    if (url.indexOf('multipart') >= 0 && token == null) {
        headers = { 'Content-Type': 'multipart/form-data' };
    } else if (token !== null) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
    } else {
        headers = { 'Content-Type': 'application/json' };
    }

    let options = {
        url: SERVER_URL + url,
        method: method,
        headers: headers,
    };

    console.log('aaaaa'+options.url)
    if (requestData) {
        options.data = requestData;
    }

    return axios(options)
        .then(response => {
            return response.data;
        }).catch(err => {
            console.error(`** apiCall Error status=${err.response.status}, message=${err.message}`);
            return Promise.reject(err.response.status);
        });
}
