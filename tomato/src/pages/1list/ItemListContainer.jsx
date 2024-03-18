import { useSearchParams } from "react-router-dom";
import Header from "../0home/Header";
import './itemList.css'
import { useRef, useState } from "react";

const ItemListFilter = ({ filterCheckedList, keyword }) => {
    let useSortType = useRef('');
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8090/item/keyword=${keyword}&sorttype=${sortType}`
        ).then(res => {
            setData(res.data)
        }).catch(err =>{
            console.log(`ItemListFilter axios : ${err.message}`)
        })
    }, [])

    return (
        <div id="listContainer">
            <div id="containerOption">
                <div id="total">총 <span>${data.length}</span> 개</div>
                <div id="listOption">
                    <div onclick="writeItemList('${keyword}','salesD')">인기상품순</div>
                    <div onclick="writeItemList('${keyword}','')">최신상품순</div>
                    <div onclick="writeItemList('${keyword}','priceA')">가격낮은순</div>
                    <div onclick="writeItemList('${keyword}','priceD')">가격높은순</div>
                </div>
            </div>
            {data ? (data.map((item)=><ItemBox data = {item}/>)) : ('')}
        </div>
    );
}

export default ItemListFilter;

