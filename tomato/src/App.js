import "./default.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import ItemList from "./pages/home/list/ItemList";
import LoginForm from "./pages/login/loginForm/LoginForm";
import EventPage from "./pages/event/EventPage";
import Admin from "./pages/admin/Admin";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemDetail from './pages/home/detail/ItemDetail';

function App() {




    return (

        <div className="App">
            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<ItemDetail />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/event' element={<EventPage />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={"잘못된 접근"} />
            </Routes>
        </div>
    );
}

export default App;
