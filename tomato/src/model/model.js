

const api = (url, method, requestData, token) => {

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

    if (requestData) {
        options.data = requestData;
    }

    let options = {
        url: "http://localhost:8090" + url,
        method: method,
        headers: headers,
    };

    return axios(options)
        .then(response => {
            return response.data;
        }).catch(err => {
            console.error(`** apiCall Error status=${err.response.status}, message=${err.message}`);
            return Promise.reject(err.response.status);
        });
}