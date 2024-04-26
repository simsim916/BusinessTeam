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
import { useSelector } from 'react-redux';
import BuyComplete from "./shop/buyComplete/BuyComplete";
import Detail from "./detail/Detail";
import ChatBotBox from './../components/chatbot/ChatBotBox';
import { SERVER_RESOURCE } from "../../model/server-config";
import Mypage from "./mypage/Mypage";
import Home_notice from "./Home_notice";
import View from "./view/View";


const Home = () => {
    console.log('Home 랜더링')
    const [notice, setNotice] = useState(true);
    const [view, setView] = useState(false)
    const alert = useSelector(state => state.basic.alert)
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <>
            <Header />
            {notice && <Home_notice setNotice={setNotice} />}
            {alert && <Alert />}
            {view && <View />}
            {
                userinfo && showChatbot ?
                    <ChatBotBox setShowChatbot={setShowChatbot} />
                    :
                    userinfo &&
                    <div onClick={() => setShowChatbot(!showChatbot)} id="chatbotIcon" style={{cursor:'pointer'}}>
                        <img src={SERVER_RESOURCE + '/img/talk.png'} alt="" />
                    </div>
            }

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ask' element={<CustomerQA />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/buy/end' element={<BuyComplete />} />
                <Route path='/event2' element={<EventPage2 />} />
                <Route path='/*' element={<Index />} />
            </Routes>
        </>
    )
}
export default React.memo(Home);