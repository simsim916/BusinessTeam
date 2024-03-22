import "./header.css";
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useState } from "react";



const Header = () => {
    console.log(`Header 랜더링`);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();


    const searchBox = (event) => {
        event.preventDefault();
        navigate(`/home/list?keyword=${keyword}`);
    }

    function searchBoxEnterKey(event) {
        if (event.which == 13) {
            searchBox(event)
        }
    }

    const changeKeyword = event => {
        setKeyword(event.target.value);
    }

    function appearinputBoxResetButton(event) {
        event.target.closest("form").children[1].style.visibility = "visible"
    }

    function resetInputBox(event) {
        const inputBox = event.target.closest('form').children[0];
        inputBox.value = '';
        inputBox.focus();
        event.target.visibility = "hidden"
    }

    return (
        <header>
            <div id="loginBar">
                <div className="container">
                    <Link to="/admin">고객센터</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/login">로그인</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a>회원가입</a>
                </div>
            </div>
            <div id="searchBar">
                <div className="container">
                    <div id="logoBox">
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="로고" />
                            <h1>토마토팜 tomatoFarm</h1>
                        </a>
                    </div>
                    <form id="searchBox">
                        <input onKeyUp={searchBoxEnterKey} onInput={appearinputBoxResetButton} onChange={changeKeyword}
                            id="searchBoxInput" type="text" placeholder="검색어를 입력해주세요." value={keyword} />
                        <i onClick={resetInputBox} className="fa-solid fa-circle-xmark"></i>
                        <button onClick={searchBox}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <div id="searchRightBox">
                        <div id="myPage">
                            <a to="/"><i className="fa-solid fa-user"></i></a>
                        </div>
                        <div id="myCart">
                            <a to="/"><i className="fa-solid fa-cart-shopping"></i></a>
                        </div>
                        <div id="myItem">
                            <a href="/"><i className="fa-solid fa-box-archive"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <Nav appearinputBoxResetButton={appearinputBoxResetButton} resetInputBox={resetInputBox} />
        </header>
    );
}

export default Header;