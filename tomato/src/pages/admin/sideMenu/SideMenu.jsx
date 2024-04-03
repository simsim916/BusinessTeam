
import { useState } from 'react';
import './SideMenu.css'
import { Link } from 'react-router-dom';

import Chatbot_admin from '../chatbot_admin/Admin_Chatbot';

const SideMenu = ({ openSideBar, sideBarOpen, currLocation }) => {



    return (
        <>
            <div id="topBarA" style={{ paddingLeft: sideBarOpen ? '95px' : '15px' }}>
                <i className="fa-solid fa-house"></i>
                &nbsp;&nbsp; 관리자페이지 &nbsp;&nbsp;
                {currLocation === ""
                    ? currLocation
                    : (
                        <span>
                            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;{currLocation}
                        </span>
                    )
                }


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
                        <Link to="/admin/chatbot"><i className="fa-solid fa-bullhorn"></i><br />고객상담</Link>
                    </li>
                    <li>
                        <div><i className="fa-solid fa-bell"></i><br />알림</div>
                    </li>
                    <li>
                        {/* <Link to="/admin/graph"><i className="fa-solid fa-comment-dots"></i><br />그래프</Link> */}
                        <Link to="/admin/graph"><i className="fa-solid fa-square-poll-vertical"></i><br />통계</Link>
                    </li>

                    <li>
                        <Link to="/admin/select"><i className="fa-solid fa-magnifying-glass"></i><br />상품 조회</Link>
                    </li>
                    <li>
                        <Link to="/admin/insert"><i className="fa-solid fa-file-import"></i><br />상품 입력</Link>
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