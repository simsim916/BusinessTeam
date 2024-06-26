
import { useState } from 'react';
import './SideMenu.css'
import { Link } from 'react-router-dom';


const SideMenu = ({ openSideBar, sideBarOpen }) => {
    const path = window.location.pathname;
    const location = path.substring(path.lastIndexOf('/') + 1);

    // const getLocation = () => {
    //     switch (location) {
    //         case 'ask':
    //             return '문의 목록';
    //         case 'select':
    //             return '상품 조회'
    //         case 'chatbot':
    //             return '채팅 상담'
    //     }
    // }

    return (
        <>
            <div id="topBarA" style={{ paddingLeft: sideBarOpen ? '95px' : '15px' }}>
                <i className="fa-solid fa-house"></i>
                &nbsp;&nbsp; <Link to="/admin">관리자페이지</Link> &nbsp;&nbsp;
                {/* <span>
                    <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;{getLocation()}
                </span> */}


            </div>
            <div id="sideBar" style={{ transform: sideBarOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
                <Link to="/home" >토마토팜</Link>
                <ul>
                    <li>
                        <Link to="/admin"><i className="fa-solid fa-house"></i><br />메인 메뉴</Link>
                    </li>
                    <li>
                        <Link to="/admin/select"><i className="fa-solid fa-magnifying-glass"></i><br />자료 조회</Link>
                    </li>
                    <li>
                        <Link to="/admin/insert"><i className="fa-solid fa-file-import"></i><br />자료 입력</Link>
                    </li>
                    <li>
                        <Link to="/admin/graph"><i className="fa-solid fa-square-poll-vertical"></i><br />방문 기록</Link>
                    </li>
                    <li>
                        <Link to="/admin/chatbot"><i className="fa-solid fa-bullhorn"></i><br />채팅 상담</Link>
                    </li>
                    <li>
                        <Link to="/admin/ask"><i className="fa-solid fa-comment-dots"></i><br />문의 목록</Link>
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