import ShopBasketSelectBox from './ShopBasketSelectBox';
import ShopBasketPayBox from './ShopBasketPayBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './../components/Loading';
import Error from './../components/Error';
import BestItemBox from './BestItemBox';


const ShopBasket = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(null);

    console.log(item)
    // useEffect(() => {
    //     axios.get(`http://localhost:8090/item/`
    //     ).then(res => {
    //         setItem(res.data);
    //         setLoading(false);
    //     }).catch(err => {
    //         setLoading(false);
    //         setError(true);
    //     })
    // }, [])

    if (loading) return <Loading />
    if (error) return <Error />


    return (
        <>
            <ShopBasketSelectBox item={item} />

            <ShopBasketPayBox />

            <BestItemBox />



        </>





    );
}

export default ShopBasket;