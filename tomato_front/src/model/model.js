import { SERVER_URL } from "./server-config";
import axios from 'axios';


export async function api(url, method, requestData, token) {

    let headers = '';

    if (url.indexOf('multipart') >= 0) {
        headers = { 'Content-Type': 'multipart/form-data' };
    } else if (token) {
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

    if (requestData) {
        options.data = requestData;
    }
    return axios(options)
        .then(response => {
            return response;
        }).catch(err => {
            return Promise.reject(err);
        });
}
