import { useSearchParams } from "react-router-dom";
import './ItemListFilter.css'
import { useEffect, useMemo, useRef } from "react";

const ItemListFilter = ({ itemListSort, changeDeletedSort }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const listfilter = useRef(null);
    const mealkit = useRef(0);
    const ingre = useRef(0);

    mealkit.current = 0;
    ingre.current = 0;

    for (let e of itemListSort) {
        if (e.sort1 == '밀키트') {
            mealkit.current += e.count;
        }
        else
            ingre.current += e.count
    }

    const checkAll = (event) => {
        //     let target = event.target.closest('li');

        //     if (target.classList.contains('selected')) {
        //         target.classList.remove('selected');
        //         for (let e of target.getElementsByTagName('li')) {
        //             e.classList.remove('selected');
        //             setFilterCheckedList((prev) => {
        //                 return prev.filter((ele) => ele.sort2 != e.children[1].innerText);
        //             });
        //         }
        //     } else {
        //         target.classList.add('opened');
        //         target.classList.add('selected');
        //         target.closest('.sortB').classList.add('selected');
        //         for (let e of target.getElementsByTagName('li')) {
        //             if (e.children[2].innerText > 0) {
        //                 console.log(e.children[2].innerText)
        //                 e.classList.add('selected');
        //                 setFilterCheckedList([...filterCheckedList, {
        //                     sort1: 'aa',
        //                     sort2: e.children[1].innerText,
        //                     count: e.children[2].innerText
        //                 }])
        //             }
        //         }
        //     }
        //     console.log(filterCheckedList)
        //     event.stopPropagation();
        //     checkList();
    }

    // const checkList = () => {
    //     console.log("--- checkC ---")
    //     for (let e of filterCheckedList) {
    //         console.log(e);
    //     }
    //     // console.log(filterCheckedList);
    // }

    const showList = (event) => {
        let target = event.target.closest('li');
        if (target.classList.contains('opened')) {
            target.classList.remove('opened');
        } else {
            target.classList.add('opened');
        }
    }

    useEffect(() => {
        const listScroll = () => {
            listfilter.current.style.height = `calc(100vh - 320px - 30px + ${window.scrollY}px)`;
            if (window.scrollY <= 300) {
                listfilter.current.style.top = `calc(325px - ${window.scrollY}px)`;
            } else {
                listfilter.current.style.top = `30px`;
            }
        }

        window.addEventListener('scroll', listScroll);
        return () => {
            window.removeEventListener('scroll', listScroll)
        }
    }, [itemListSort])

    return (
        <div id="listfilter" ref={listfilter}>
            <ul>
                <li onClick={showList} className={mealkit.current > 0 ? 'sortB opened selected' : 'sortB'}>
                    <i onClick={checkAll} className="fa-regular fa-circle-check" ></i>
                    밀키트
                    <span className="itemList_count">
                        {mealkit.current}
                    </span>
                    <ul>
                        {itemListSort.filter((e) => e.sort1 == '밀키트').sort((b, a) => a.count - b.count).map((e, i) => (
                            <li onClick={changeDeletedSort} key={i} className={e.count > 0 ? 'selected' : ''}>
                                <i className="fa-regular fa-circle-check"></i>
                                <span>{e.sort2}</span><span className="itemList_count">{e.count}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <hr />
                <li onClick={showList} className={ingre.current > 0 ? 'sortB opened selected' : 'sortB'}>
                    <i onClick={checkAll} className="fa-regular fa-circle-check"></i>식재료
                    <span className="itemList_count">
                        {ingre.current}
                    </span>
                    <ul>
                        {itemListSort.filter((e) => e.sort1 == '식재료').sort((b, a) => a.count - b.count).map((e, i) => (
                            <li onClick={changeDeletedSort} key={i} className={e.count > 0 ? 'selected' : ''}>
                                <i className="fa-regular fa-circle-check"></i>
                                <span>{e.sort2}</span><span className="itemList_count">{e.count}</span>
                            </li>
                        ))}
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
    );
}

export default ItemListFilter;

