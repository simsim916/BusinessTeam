import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/axios/axios';
import { SERVER_URL } from '../model/server-config';

const ReduxTest = () => {
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.itemList);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            {dataState.loading ? (
                <p>Loading...</p>
            ) : dataState.error ? (
                <p>Error: {dataState.error}</p>
            ) : (
                <ul>
                    {dataState.data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReduxTest;