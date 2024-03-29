
import { useState } from 'react';
import './SideMenu.css'

const SideMenu = () => {

    const [sideBarOpen, setSideBarOpen] = useState(true);



    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
        console.log(sideBarOpen)
    };

    return (
        <>
            <div id="topBarA" style={{ paddingLeft: sideBarOpen ? '95px' : '15px' }}>
                <i className="fa-solid fa-house"></i>
            </div>
            <div id="sideBar" style={{ transform: sideBarOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
                <div>토마토팜</div>
                <ul>
                    <li>
                        <div><i className="fa-solid fa-bars"></i><br />전체메뉴</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-circle-user"></i><br />즐겨찾기</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-list-check"></i><br />최근메뉴</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-bullhorn"></i><br />공지사항</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-bell"></i><br />알림</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-comment-dots"></i><br />고객센터</div>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-gear"></i><br />설정</div>
                    </li>
                </ul>
                <div id="sideBarButton" onClick={openSideBar}>
                    <i className="fa-solid fa-chevron-right" style={{ transform: sideBarOpen ? 'rotateY(180deg)' : 'rotateY(0deg)' }}></i>
                </div>
            </div>
        </>
    );
}

export default SideMenu;