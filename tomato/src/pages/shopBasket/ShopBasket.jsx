import Header from '../0home/header/Header';
import ShopBasketSelectBox from './ShopBasketSelectBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './../components/Loading';
import Error from './../components/Error';


const ShopBasket = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(item)
    useEffect(() => {
        axios.get(`http://localhost:8090/item/`
        ).then(res => {
            setItem(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />


    return (
        <>
            <Header />
            <ShopBasketSelectBox />

            <ShopBasketPayBox />

            <BestItemBox />
        
        
        
        </>





    );
}

export default ShopBasket;