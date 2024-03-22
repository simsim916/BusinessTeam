import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './../index/header/Header';
import ItemListFilter from './ItemListFilter';
import ItemListContainer from './ItemListContainer';

const ItemList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const [itemList, setItemList] = useState(null);
    const [sortList, setSortList] = useState(null);
    const [filterCheckedList, setFilterCheckedList] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8090/item/searchsort?keyword=${keyword}`;
        axios.get(url
        ).then(res => {
            setSortList(res.data)
        }).catch(err => {
            console.log(`${err.message}`)
        })
    }, [])

    useEffect(() => {
        const url = `http://localhost:8090/item/search?keyword=${keyword}`;
        axios.get(url
        ).then(res => {
            setItemList(res.data)
        }).catch(err => {
            console.log(`${err.message}`)
        })
    }, [])

    return (
        <>
            <div id="searchTitle" className="container">
                " <b>{keyword}</b> " <span>에 대한 검색 결과</span>
            </div>
            <div className="container">
                <ItemListFilter sortList={sortList} keyword={keyword} />
                <ItemListContainer itemList={itemList} keyword={keyword} />
            </div>
        </>
    );
}

export default ItemList;

