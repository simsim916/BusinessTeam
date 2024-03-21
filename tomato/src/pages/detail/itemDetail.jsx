import { useSearchParams } from 'react-router-dom';
import Header from '../0home/header/Header';
import ItemDetailBox from './ItemDetailBox';
import ReviewBoardBox from './ReviewBoardBox';
import AskBoardBox from './AskBoardBox';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ItemDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const itemCode = searchParams.get("code");
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(item)
    useEffect(() => {
        axios.get(`http://localhost:8090/item/detail?stringType='item.code'&keyword=${itemCode}`
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
            <ItemDetailBox item={item} />
            <ReviewBoardBox item={item} />
            <AskBoardBox item={item} />
        </>
    );
}

export default ItemDetail