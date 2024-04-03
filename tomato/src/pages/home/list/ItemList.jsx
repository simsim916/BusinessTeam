import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
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
    const filterCheckedList = useRef()
    const [deletedSort, setDeletedSort] = useState([]);

    useEffect(() => {
        dispatch(getItemList(`/item/search?keyword=${keyword}`, 'get'))
        dispatch(getItemSortList(`/item/searchsort?keyword=${keyword}`, 'get'))
    }, [keyword])

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'itemList'
            }
        })
    }, [])

    const changeDeletedSort = (event) => {
        const value = event.target.closest('li').children[1].innerText;
        for (let e of filterCheckedList.current) {
            if (e.sort2 == value) {
                if (deletedSort.includes(value)) {
                    setDeletedSort(deletedSort.filter(e => e != value))
                } else {
                    setDeletedSort([...deletedSort, value])
                }
            }
        }
    }
    const changeItemList = () => {
        let result = [...itemList.data];
        for (let ele of deletedSort) {
            console.log(ele)
            result = result.filter((e) => e.sort2 != ele && e.brand != ele)
        }
        return result;
    }

    useMemo(() => {
        console.log(deletedSort)
        changeItemList()
    }, [deletedSort])

    if (itemList.loading || itemListSort.loading) return <Loading />
    if (itemList.error || itemListSort.error) return <Error />

    if (itemListSort.data) {
        filterCheckedList.current = itemListSort.data.filter(e => e.count > 0);
    }

    return (
        <>
            <div id="searchTitle" className="container">
                " <b>{keyword}</b> " <span>에 대한 검색 결과</span>
            </div>
            <div className="container">
                <ItemListFilter itemListSort={itemListSort.data} deletedSort={deletedSort} changeDeletedSort={changeDeletedSort} />
                <ItemListContainer itemList={changeItemList()} />
            </div>
        </>
    );
}

export default ItemList;

