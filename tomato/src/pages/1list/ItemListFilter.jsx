import { useSearchParams } from "react-router-dom";
import Header from "../0home/Header";
import './itemList.css'
import { useState } from "react";

const ItemListFilter = ({ filterCheckedList, keyword }) => {
    const [searchParams, setSearchParams] = useSearchParams();

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

    return (
        <div>
            <Header />
            <div id="searchTitle" className="container">
                <b>{keyword}</b><span>에 대한 검색 결과</span>
            </div>
            <div className="container">
                <div id="listfilter">
                    <ul>
                        <li onClick={showList} className="sortB">
                            <i onClick={checkAll} className="fa-regular fa-circle-check"></i>
                            <span>밀키트</span>
                        </li>
                        <li onClick={showList} className="sortB">
                            <i onClick={checkAll} className="fa-regular fa-circle-check"></i>식재료
                            <ul>
                                {/* <Sortli /> */}
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
            </div>
        </div>
    );
}

export default ItemListFilter;

