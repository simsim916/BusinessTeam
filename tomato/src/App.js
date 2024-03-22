import "./default.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/0home/Home";
import ItemList from "./pages/1list/ItemList";
import LoginForm from "./pages/login/loginForm/LoginForm";
import ItemDetail from './pages/detail/ItemDetail';
import EventPage from "./pages/event/EventPage";
import Admin from "./pages/admin/Admin";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InsertDataBox from "./pages/admin/insertDataBox/InsertDataBox";
import SelectDataBox from './pages/admin/selectDataBox/SelectDataBox';

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
                <Route path='/admin/insertPage' element={<SelectDataBox />} />
                <Route path='/admin/insertPage' element={<InsertDataBox />} />
            </Routes>
        </div>
    );
}

export default App;
