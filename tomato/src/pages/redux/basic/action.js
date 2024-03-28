export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const logIn = () => ({
    type: LOGIN,
    payload: true
});

export const logOut = () => ({
    type: LOGOUT,
    payload: false
});