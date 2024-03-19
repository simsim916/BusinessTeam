import { useSearchParams } from "react-router-dom";
import Header from "../0home/header/Header";
import './itemList.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from '../components/ItemBox'

const ItemListFilter = ({ keyword, filterCheckedList }) => {
    let useSortType = useRef('');
    console.log(`keyword : ${keyword}`)
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8090/item/search?keyword=${keyword}&sorttype=${useSortType.current}`;
        axios.get(url
        ).then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(`ItemListFilter axios : ${err.message}`)
        })
    }, [])

    return (
        <div id="listContainer">
            <div id="containerOption">
                <div id="total">총 <span>{data ? data.length : '0'}</span> 개</div>
                <div id="listOption">
                    <div>인기상품순</div>
                    <div>최신상품순</div>
                    <div>가격낮은순</div>
                    <div>가격높은순</div>
                </div>
            </div>
            {data ? (data.map((e, i) => <ItemBox key={i} data={e} />)) : ('')}
        </div>
    );
}

export default ItemListFilter;

