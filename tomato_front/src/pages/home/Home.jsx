import { Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import BuyBox from './shop/buy/BuyBox';
import Cart from './shop/cart/Cart';
import React, { useState } from "react";
import EventPage2 from './../event/EventPage2';
import CustomerQA from "../customerQA/CustomerQA";
import Alert from "../components/alert/Alert";
import { useDispatch, useSelector } from 'react-redux';
import BuyComplete from "./shop/buyComplete/BuyComplete";
import Detail from "./detail/Detail";
import ChatBotBox from './../components/chatbot/ChatBotBox';
import { SERVER_RESOURCE } from "../../model/server-config";
import Mypage from "./mypage/MyPage";
import Home_notice from "./Home_notice";
import View from "./view/View";
import { changeAlert } from './../redux/basic/actions';

const Home = () => {
    const dispatch = useDispatch();
    const [notice, setNotice] = useState(true);
    const [view, setView] = useState(false);
    const alert = useSelector(state => state.basic.alert);
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const [showChatbot, setShowChatbot] = useState(false);

    const chageChatbot = () => {
        if (userinfo)
            setShowChatbot(!showChatbot)
        else
            dispatch(changeAlert({
                title: '로그인 필요!',
                content: `챗봇은 로그인 전용 기능입니다!`,
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    position: 'absolute'
                }
            }))
    }

    return (
        <>
            <Header setView={setView} />
            {notice && <Home_notice setNotice={setNotice} />}
            {alert && <Alert />}
            {view && <View setView={setView} />}
            {
                showChatbot ?
                    <ChatBotBox setShowChatbot={setShowChatbot} />
                    :
                    <div onClick={chageChatbot} id="chatbotIcon" style={{ cursor: 'pointer' }}>
                        <img src={SERVER_RESOURCE + '/img/talk.png'} alt="" />
                    </div>
            }

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/mypage/*' element={<Mypage />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ask' element={<CustomerQA />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/buy/end' element={<BuyComplete />} />
                <Route path='/event' element={<EventPage2 />} />
                <Route path='/*' element={<Index />} />
            </Routes>
        </>
    )
}
export default React.memo(Home);