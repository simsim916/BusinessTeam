import './ItemListContainer.css'
import { useState } from "react";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';
import PagingBox from "../../components/PagingBox";


const ItemListContainer = ({ keyword, itemList, setItemList }) => {
    console.log('ItemListContainer 랜더링')
    const [sort, setSort] = useState('sales');
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(16);

    const paging = () => (pageNum, size) => {
        // slice 한 List 를 반환시키는 메서드
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return itemList.slice(start, end);
    }

    const howManyItems = (event) => {
        event.target.style.opacity = "1";
        for (let t of event.target.parentNode.children) {
            if (t != event.target) {
                t.style.opacity = "0.3";
            }
        }
        setLimit(event.target.innerText);
        setCurrPage(1);
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

            <div id="listContainer" style={{ display: limit != 16 ? 'flex' : 'grid', height: limit != 16 ? 'auto' : '' }}>
                <div id="containerOption">
                    <div id="listButton">
                        <div onClick={howManyItems}></div>
                        <div onClick={howManyItems}></div>
                        <div onClick={howManyItems}></div>
                    </div>
                    <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                    <div id="listOption">
                        <div id="sales" style={{ opacity: sort == "sales" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>인기상품순</div>
                        <div id="price" style={{ opacity: sort == "price" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격낮은순</div>
                        <div id="priceD" style={{ opacity: sort == "priceD" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList, setItemList)}>가격높은순</div>
                    </div>
                </div>
                {
                    limit == 16 ?
                        (paging()(currPage, limit).map((e, i) => <ItemBox key={i} item={e} />))
                        :
                        (paging()(currPage, limit).map((e, i) => <ItemBox_vertical key={i} item={e} />))
                }
                <PagingBox
                    limit={limit}
                    setLimit={setLimit}
                    list={itemList}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />
            </div>
        </>
    );
}

export default ItemListContainer;

