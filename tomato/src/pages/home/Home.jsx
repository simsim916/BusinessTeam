import { Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import ItemDetail from './detail/ItemDetail';
import BuyBox from './shop/buy/BuyBox';
import Cart from './shop/cart/Cart';
import React from "react";
import EventPage2 from './../event/EventPage2';
import CustomerQA from "../customerQA/CustomerQA";


const Home = () => {
    console.log('Home 랜더링')
    return (
        <>
            <Header />

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<ItemDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ask' element={<CustomerQA />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/event2' element={<EventPage2 />} />
                <Route path='/*' element={<Index />} />
            </Routes>
        </>
    )
}
export default React.memo(Home);