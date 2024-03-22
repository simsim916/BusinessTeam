import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './../../components/Loading';
import Error from './../../components/Error';
import Header from './../index/header/Header';
import ItemDetailBox from './descript/ItemDetailBox';
import ReviewBoardBox from './review/ReviewBoardBox';
import AskBoardBox from './ask/AskBoardBox';

const ItemDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const itemCode = searchParams.get("code");
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8090/item/detailn?column=item.code&keyword=${itemCode}`
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