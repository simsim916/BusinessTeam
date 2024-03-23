import { useSearchParams } from "react-router-dom";
import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';

const ItemListContainer = ({ keyword, itemList }) => {
    const [view, setView] = useState(false);

    return (
        <div id="listContainer" style={{ display: view ? 'flex' : 'grid', height: view ? 'auto' : '' }}>
            <div id="containerOption">
                <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                <div id="listOption">
                    <div>인기상품순</div>
                    <div>최신상품순</div>
                    <div>가격낮은순</div>
                    <div>가격높은순</div>
                </div>
            </div>
            {
                view ?
                    itemList.slice(0, 6).map((e, i) => <ItemBox_vertical key={i} item={e} />)
                    :
                    itemList.map((e, i) => <ItemBox key={i} item={e} />)
            }
        </div>
    );
}

export default ItemListContainer;

