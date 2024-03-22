import { useSearchParams } from "react-router-dom";
import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';

const ItemListContainer = ({ keyword, itemList }) => {
    const [view, setView] = useState(false);



// const pageMaker = () => {

//     const paging = () => (pageNum, size) => {
//         const start = size * (pageNum - 1)
//         const end = pageNum * size

//         return this.slice(start, end);
//     }

//     const sortItemList = (event, list, setFunc) => {
//         let sortType = event.target.name;

//         list = list.sort((a, b) => {
//             return b[sortType] - a[sortType];
//         })
//         setFunc(list)
//     }
// }
// 모듈화 위해 잠시 빼둔다.


const ItemListContainer = ({ keyword, itemList, setItemList }) => {
    console.log('ItemListContainer 랜더링')
    const [sort, setSort] = useState(null);


    const paging = () => (pageNum, size) => {
        const start = size * (pageNum - 1);
        const end = pageNum * size;

        return itemList.slice(start, end);
    }


    const sortItemList = (event, list, setFunc) => {
        let sortType = event.target.id;
        let sortedList;
        if (sortType.includes("D")) {
            sortType = sortType.replace("D", "")
            sortedList = list.sort((a, b) => {
                return b[sortType] - a[sortType];
            })
        } else {
            sortedList = list.sort((a, b) => {
                return a[sortType] - b[sortType];
            })
        }
        setSort(sortType);
        setFunc(sortedList)
    }

    const getPageNum = (size) => {
        let needPageCount = 1;
        if (itemList) {
            needPageCount = Math.ceil(itemList.length / size);
        }
        return needPageCount;
        return Array.from({ length: needPageCount }, (_, index) => index + 1);
    }

    return (
        <>
            <div id="listContainer" style={{ display: view ? 'flex' : 'grid', height: view ? 'auto' : '' }}>
                <div onClick={getPageNum(16)}>총 <span></span> 개</div>
                <div id="containerOption">
                    <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                    <div id="listOption">
                        <div id="sales" style={{ opacity: sort == "sales" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>인기상품순</div>
                        <div id="price" style={{ opacity: sort == "price" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격낮은순</div>
                        <div id="priceD" style={{ opacity: sort == "priceD" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격높은순</div>
                    </div>
                </div>
                {/* {itemList ? (itemList.map((e, i) => <ItemBox key={i} item={e} />)) : ('')} */}
                {itemList ? (paging()(1, 16).map((e, i) => <ItemBox key={i} item={e} />)) : ('')}
                {/* 이거 뭔 코드가 이래? 클로저 라는걸 써서 그렇다는데 이해가 안돼 */}
            </div>
            {
                view ?
                    itemList.slice(0, 6).map((e, i) => <ItemBox_vertical key={i} item={e} />)
                    :
                    itemList.map((e, i) => <ItemBox key={i} item={e} />)
            }
        </div>
            <div id="pagingBox">
                <div><i class="fa-solid fa-angles-left"></i></div>
                {getPageNum.map((e, i) => {
                    <div key={i}>{e}</div>
                })}
                <div><i class="fa-solid fa-angles-right"></i></div>
            </div>
        </>
    );
}

export default ItemListContainer;

