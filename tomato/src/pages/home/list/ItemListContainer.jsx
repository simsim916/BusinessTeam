import { useSearchParams } from "react-router-dom";
import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';





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
    const [sort, setSort] = useState('sales');
    const [view, setView] = useState(false);
    const [currPage, setCurrPage] = useState(1);

    const paging = () => (pageNum, size) => {
        // slice 한 List 를 반환시키는 메서드
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return itemList.slice(start, end);
    }


    const sortItemList = (event, list, setFunc) => {
        // 1. 정렬하고자 하는 Column 의 이름을 onClick 주는 요소의 id로 지정
        // 2. list = 정렬하고자 하는 List
        // 3. setFunc() = 원본ItemList를 정렬된itemList로 덮어씌운다.
        let sortType = event.target.id;
        let sortedList;
        if (sortType.includes("D")) {
            sortType = sortType.replace("D", "")
            sortedList = list.sort((a, b) => {
                setCurrPage(1)
                setSort(sortType + "D");
                return b[sortType] - a[sortType];
            })
        } else {
            setSort(sortType);
            setCurrPage(1)
            sortedList = list.sort((a, b) => {
                return a[sortType] - b[sortType];
            })
        }
        setFunc(sortedList)
    }

    const getPageNum = (size) => {
        // 페이징 할 <div> 태그 만들때 쓰는 함수
        let needPageCount = 1;
        let arr = [];
        if (itemList) {
            needPageCount = Math.ceil(itemList.length / size);
            for (let i = 0; i < needPageCount; i++) {
                arr.push(i + 1);
            }
        }
        return arr;
        // 우리가 보고자 하는 데이터의 개수를 가지고 필요한 페이지 수를 계산  
        // ex) 필요한 페이지 수 7 => [1,2,3,4,5,6,7] 배열 return
    }
    const test = () => {
        setCurrPage(1);
        setView(!view);
    }


    return (
        <>
            <div id="listContainer" style={{ display: view ? 'flex' : 'grid', height: view ? 'auto' : '' }}>
                <div id="containerOption">
                    <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                    <div id="listOption">
                        <div id="sales" style={{ opacity: sort == "sales" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>인기상품순</div>
                        <div id="price" style={{ opacity: sort == "price" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격낮은순</div>
                        <div id="priceD" style={{ opacity: sort == "priceD" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격높은순</div>
                    </div>
                </div>
                {
                    view ?
                        // itemList.slice(0, 6).map((e, i) => <ItemBox_vertical key={i} item={e} />)
                        (paging()(currPage, 6).map((e, i) => <ItemBox_vertical key={i} item={e} />))
                        :
                        (paging()(currPage, 16).map((e, i) => <ItemBox key={i} item={e} />))
                    //이거 뭔 코드가 이래? 클로저 라는걸 써서 그렇다는데 이해가 안돼
                }
            </div>
            <div id="pagingBox">
                <div onClick={() => setCurrPage(1)}><i className="fa-solid fa-angles-left"></i></div>
                {/* {getPageNum(16).map((pageNum, i) => {
                    (
                    <div onClick={() => setCurrPage(pageNum)} id={pageNum} key={i}>{pageNum}</div>
                    )
                })} */}
                {/* 
                위 코드는 모든 페이지를 노출시키고, 
                아래 코드는 페이지 숫자를 5개만 노출시키고, 현재 페이지는 항상 가운데 오도록
                */}
                {getPageNum(16).map((pageNum, i) => {
                    const startPage = Math.max(currPage - 2, 1);
                    const endPage = Math.min(startPage + 4, getPageNum(16).length);

                    if (pageNum >= startPage && pageNum <= endPage) {
                        return (
                            <div style={{ fontWeight: pageNum === currPage ? 'bold' : '' }}
                                onClick={() => setCurrPage(pageNum)} id={pageNum} key={i}>{pageNum}</div>);
                    } else {
                        return null;
                    }
                })}
                <div onClick={() => setCurrPage(getPageNum(16).length)}><i className="fa-solid fa-angles-right"></i></div>
            </div >
        </>
    );
}

export default ItemListContainer;

