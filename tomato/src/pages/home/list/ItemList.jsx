import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './../index/header/Header';
import ItemListFilter from './ItemListFilter';
import ItemListContainer from './ItemListContainer';
import Loading from './../../components/Loading';
import Error from './../../components/Error';
import { useSelector, useDispatch } from 'react-redux';
import { getItemList } from "../../redux/itemList/actions";
import { getItemSortList } from "../../redux/itemListSort/actions";

const ItemList = () => {
    console.log('ItemList랜더링')
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const itemListSort = useSelector(state => state.itemListSort);
    const [filterCheckedList, setFilterCheckedList] = useState()

    useEffect(() => {
        dispatch(getItemList(`/item/search?keyword=${keyword}`, 'get'))
        dispatch(getItemSortList(`/item/searchsort?keyword=${keyword}`, 'get'))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'itemList'
            }
        })
    }, [])

    useEffect(() => {
        if (itemListSort.data) {
            const filteredList = itemListSort.data.filter(e => e.count > 0);
            setFilterCheckedList(filteredList);
        }
    }, [itemListSort.data]);

    const asdf = (event) => {
        if(filterCheckedList.includes(event.target.value)){
            setFilterCheckedList(filterCheckedList.filter(e => e.sort2 != event.target.value));
        } else {
            setFilterCheckedList(...filterCheckedList, event.target.value);
        }
    }

    const qwer = ()=>{
        
    }

    if (itemList.loading || itemListSort.loading) return <Loading />
    if (itemList.error || itemListSort.error) return <Error />

    return (
        <>
            <div id="searchTitle" className="container">
                " <b>{keyword}</b> " <span>에 대한 검색 결과</span>
            </div>
            <div className="container">
                <ItemListFilter itemListSort={itemListSort.data} filterCheckedList={filterCheckedList} setFilterCheckedList={setFilterCheckedList} />
                {/* <ItemListContainer itemList={itemList} keyword={keyword} setItemList={setItemList} /> */}
            </div>
        </>
    );
}

export default ItemList;

