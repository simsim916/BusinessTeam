import { Route, Routes } from "react-router-dom";
import Header from './index/header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import ItemDetail from './detail/ItemDetail';
import BuyBox from './shop/buy/BuyBox';
import Cart from './shop/cart/Cart';
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/user/action";
import React, { useEffect } from "react";
import { setUserCartSession } from "../redux/userCart/action";


const Home = () => {
    console.log('Home 랜더링')
    return (
        <>
            <Header />

            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<ItemDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/*' element={<Index />} />
            </Routes>
        </>
    )
}
export default React.memo(Home);