import "./NavBar.css";


const NavBar = () => {

    return(
        <>
            <div id="topBar">
                <i class="fa-solid fa-house"></i>
            </div>
            <div id="sideBar">
                <div>토마토팜</div>
                <ul>
                    <li onclick="openDetailFirst()">
                        <div><i class="fa-solid fa-bars"></i><br />전체메뉴</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-circle-user"></i><br />즐겨찾기</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-list-check"></i><br />최근메뉴</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-bullhorn"></i><br />공지사항</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-bell"></i><br />알림</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-comment-dots"></i><br />고객센터</div>
                    </li>
                    <li>
                        <div><i class="fa-solid fa-gear"></i><br />설정</div>
                    </li>
                </ul>
                <div onclick="openSideBar()" id="sideBarButton"><i class="fa-solid fa-chevron-right"></i></div>
                <div id="sideBarDetail">
                    <div id="sideBarDetailFirst">
                        <ul>
                            <li>상품주문</li>
                            <li>상품조회/검색</li>
                            <li>주문조회</li>
                            <li>클레임 처리현황</li>
                            <li>출력물</li>
                        </ul>
                    </div>
                    <div id="sideBarDetailSecond">
                        <div id="sideBarDetailSecondExit" onclick="closeDetail()"><i class="fa-solid fa-xmark"></i></div>
                        <div id="sideBarDetailSecondSearch">
                            <input type="text" />
                                <i class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul>
                            <li>식재주문등록</li>
                            <li>식단주문등록</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;