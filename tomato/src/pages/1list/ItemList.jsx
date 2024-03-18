import { useSearchParams } from "react-router-dom";
import Header from "../0home/Header";
import './itemList.css'
import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    console.log(keyword);
    const filterCheckedList = [];

    return (
        <>
        </>
    );
}

export default ItemList;

