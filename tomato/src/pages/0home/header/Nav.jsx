import axios from 'axios';
import './nav.css'
import CategoryList from './CategoryList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ appearinputBoxResetButton, resetInputBox }) {

    const [data, setData] = useState(null);

    function seachCategory(event) {
        let key = event.target.value;
        let liBox = event.target.closest('ul').children;
        for (let i = 2; i < liBox.length; i++) {
            if (!liBox[i].innerText.includes(key)) {
                liBox[i].style.display = "none";
            } else {
                liBox[i].style.display = "block";
            }
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8090/item/sort"
        ).then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(`Nav axios : ${err.message}`)
        })
    }, [])


    return (
        <nav>
            <div className="container">
                <div id="categoryBox">
                    <div id="categoryTag"><i className="fa-solid fa-bars"></i>&nbsp;&nbsp;&nbsp;카테고리</div>
                    <ul id="firstCategory">
                        <li></li>
                        <li id="firstCategorySearch">
                            <form>
                                <input onKeyUp={(event) => seachCategory(event)} onInput={(event) => appearinputBoxResetButton(event)}
                                    type="text" /><i onClick={(event) => resetInputBox(event)} className="fa-solid fa-circle-xmark"></i>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </li>
                        {data ? (data.map((e, i) => <CategoryList key={i} data={e} />)) : ('')}
                    </ul>
                </div>
                <ul id="navBar">
                    <li><Link to="/list?keyword=밀키트">밀키트 주문</Link></li>
                    <li><a href="">식단 주문</a></li>
                    <li><a href="">재료 주문</a></li>
                    <li><a href="">이벤트</a></li>
                </ul>
            </div>
        </nav>
    );
}



export default Nav;