import { useSearchParams } from "react-router-dom";
import Header from "../0home/header/Header";
// import './itemList.css'
import { useEffect, useState } from "react";
import axios from "axios";
import ItemListFilter from "./ItemListFilter";
import ItemListContainer from "./ItemListContainer";

const ItemList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    console.log(keyword);
    const filterCheckedList = [];

    return (
        <>
            <Header />
            <div id="searchTitle" className="container">
                " <b>{keyword}</b> " <span>에 대한 검색 결과</span>
            </div>
            <div className="container">
                <ItemListFilter keyword={keyword} filterCheckedList={filterCheckedList} />
                <ItemListContainer keyword={keyword} filterCheckedList={filterCheckedList} />
            </div>
        </>
    );
}

export default ItemList;

