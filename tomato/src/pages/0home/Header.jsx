import "./header.css";
import logo from '../../img/logo.png'
import Nav from "./nav/Nav";

function Header() {
    return (
        <div>
            <div id="loginBar">
                <div class="container">
                    <a>고객센터</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a onclick='writeLoginPage()'>로그인</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="">회원가입</a>
                </div>
            </div>
            <div id="searchBar">
                <div class="container">
                    <div id="logoBox">
                        <a href="/">
                            <img src={logo} alt="로고" />
                            <h1>토마토팜 tomatoFarm</h1>
                        </a>
                    </div>
                    <form id="searchBox">
                        <input onkeyup="searchBoxEnterKey(event)" oninput="appearinputBoxResetButton(this)"
                            id="searchBoxInput" type="text" placeholder="검색어를 입력해주세요." />
                        <i onclick="resetInputBox(this)" class="fa-solid fa-circle-xmark"></i>
                        <button onclick="searchBox(event)"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <div id="searchRightBox">
                        <div id="myPage">
                            <a to="/"><i class="fa-solid fa-user"></i></a>
                        </div>
                        <div id="myCart">
                            <a to="/"><i class="fa-solid fa-cart-shopping"></i></a>
                        </div>
                        <div id="myItem">
                            <a href="/"><i class="fa-solid fa-box-archive"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    );
}

export default Header;