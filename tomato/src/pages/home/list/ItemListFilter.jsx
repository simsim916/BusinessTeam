import { useSearchParams } from "react-router-dom";
import './itemList.css'
import { useEffect, useMemo, useRef } from "react";

const ItemListFilter = ({ filterCheckedList, sortList }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const listfilter = useRef(null);

    // console.log(sortList)

    function checkAll(event) {
        let target = event.target.closest('li');

        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
            for (let e of target.getElementsByTagName('li')) {
                e.classList.remove('selected');
                filterCheckedList = filterCheckedList.filter((ele) =>
                    ele !== e.innerText
                );
            }
        } else {
            target.classList.add('opened');
            target.classList.add('selected');
            target.closest('.sortB').classList.add('selected');
            for (let e of target.getElementsByTagName('li')) {
                e.classList.add('selected');
                if (!filterCheckedList.includes(e.innerText))
                    filterCheckedList.push(e.innerText);
            }
        }
        event.stopPropagation();
        checkList();
    }

    function checkList() {
        console.log("--- checkC ---")
        for (let e of filterCheckedList) {
            console.log(e);
        }
    }

    function showList(event) {
        let target = event.target.closest('li');
        if (target.classList.contains('opened')) {
            target.classList.remove('opened');
        } else {
            target.classList.add('opened');
        }
    }

    useEffect(() => {
        const listScroll = () => {
            listfilter.style.height = `calc(100vh - 320px - 30px + ${window.scrollY}px)`;
            if (window.scrollY <= 300) {
                listfilter.style.top = `calc(325px - ${window.scrollY}px)`;
            } else {
                listfilter.style.top = `30px`;
            }
        }


        window.addEventListener('scroll', listScroll);
        return window.removeEventListener('scroll', listScroll)
    }, [])

    return (
        <>
            <div id="listfilter" ref={listfilter}>
                <ul>
                    <li onClick={showList} className="sortB">
                        <i onClick={checkAll} className="fa-regular fa-circle-check"></i>
                        <span>밀키트</span>
                    </li>
                    <li onClick={showList} className="sortB">
                        <i onClick={checkAll} className="fa-regular fa-circle-check"></i>식재료
                        <ul>
                            {/* {sortList.map((e,i)=><SortList sort2={e} />)} */}
                        </ul>
                    </li>
                    <li>
                        <i className="fa-regular fa-circle-check"></i>행사
                        <ul>
                            <li><i className="fa-regular fa-circle-check"></i>채선당</li>
                            <li><i className="fa-regular fa-circle-check"></i>도리깨침</li>
                        </ul>
                    </li>
                    <li id="filterPrice">
                        <i className="fa-regular fa-circle-check"></i>가격
                        <form>
                            <input type="text" placeholder="0" />
                            &nbsp;&nbsp;~&nbsp;&nbsp;
                            <input type="text" placeholder="1000000" />
                        </form>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ItemListFilter;

