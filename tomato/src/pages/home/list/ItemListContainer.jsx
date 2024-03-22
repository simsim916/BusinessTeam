import { useSearchParams } from "react-router-dom";
import Header from "../0home/header/Header";
import './itemList.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from '../../components/ItemBox'

const ItemListContainer = ({ keyword, itemList }) => {
    return (
        <div id="listContainer">
            <div id="containerOption">
                <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                <div id="listOption">
                    <div>인기상품순</div>
                    <div>최신상품순</div>
                    <div>가격낮은순</div>
                    <div>가격높은순</div>
                </div>
            </div>
            {itemList ? (itemList.map((e, i) => <ItemBox key={i} item={e} />)) : ('')}
        </div>
    );
}

export default ItemListContainer;

