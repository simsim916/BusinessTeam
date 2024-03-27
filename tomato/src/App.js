import "./default.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import ItemList from "./pages/home/list/ItemList";
import LoginForm from "./pages/login/loginForm/LoginForm";
import EventPage from "./pages/event/EventPage";
import Admin from "./pages/admin/Admin";
import React, { useEffect, useState } from 'react';
import ItemDetail from './pages/home/detail/ItemDetail';
import ShopBasketSelectBox from './pages/shopBasket/ShopBasketSelectBox';

function App() {




    return (

        <div className="App">
            <Routes>
                {/* <Route path='/list' element={<ItemList />} /> */}
                {/* <Route path='/detail' element={<ItemDetail />} /> */}
                <Route path='/login' element={<LoginForm />} />
                <Route path='/event' element={<EventPage />} />
                <Route path='/admin/*' element={<Admin />} />
                {/* <Route path='/basket' element={<ShopBasketSelectBox />} /> */}
                {/* <Route path='/home/list' element={<ItemList />} /> */}
                <Route path='/home/*' element={<Home />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
