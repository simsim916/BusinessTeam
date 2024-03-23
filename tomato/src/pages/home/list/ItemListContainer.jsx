import { useSearchParams } from "react-router-dom";
import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';
import PagingBox from "../../admin/PagingBox";


const ItemListContainer = ({ keyword, itemList, setItemList }) => {
    console.log('ItemListContainer 랜더링')
    const [sort, setSort] = useState('sales');
    const [view, setView] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(16);

    const paging = () => (pageNum, size) => {
        // slice 한 List 를 반환시키는 메서드
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return itemList.slice(start, end);
    }

    const sortItemList = (event, list, setFunc) => {
        // 1. 정렬하고자 하는 Column 의 이름을 onClick 주는 요소의 id로 지정
        // 2. list = 정렬하고자 하는 List
        // 3. setFunc() = 원본List를 정렬된List로 덮어씌운다.
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

    const getPageNum = (size, list) => {
        // 페이징 할 <div> 태그 만들때 쓰는 함수
        let needPageCount = 1;
        let arr = [];
        if (list) {
            needPageCount = Math.ceil(list.length / size);
            for (let i = 0; i < needPageCount; i++) {
                arr.push(i + 1);
            }
        }
        return arr;
        // 우리가 보고자 하는 데이터의 개수를 가지고 필요한 페이지 수를 계산  
        // ex) 필요한 페이지 수 7 => [1,2,3,4,5,6,7] 배열 return
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
                    // view ?
                    //     (paging()(currPage, 6).map((e, i) => <ItemBox_vertical key={i} item={e} />))
                    //     :
                    //     (paging()(currPage, 16).map((e, i) => <ItemBox key={i} item={e} />))

                    // 페이징컴포넌트 사용할때 limit 변수가 있으면 편해서 지정해준 상태
                    // limit를 이용하면 view 변수가 필요없음
                    limit == 16 ?
                        (paging()(currPage, limit).map((e, i) => <ItemBox key={i} item={e} />))
                        :
                        (paging()(currPage, limit).map((e, i) => <ItemBox_vertical key={i} item={e} />))

                }
            </div>
            <PagingBox
                limit={limit}
                setLimit={setLimit}
                list={itemList}
                currPage={currPage}
                setCurrPage={setCurrPage} />
        </>
    );
}

export default ItemListContainer;

