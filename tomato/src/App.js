import "./default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Member from "./pages/login/Member";
import EventPage from "./pages/event/EventPage";
import Admin from "./pages/admin/Admin";
import React from 'react';
import { Provider } from 'react-redux';
import store from "./pages/redux/store";
import EventPage2 from './pages/event/EventPage2';
import NaverPay from './pages/event/eventPay/NaverPay';

function App() {


    return (
        <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route path='/member/*' element={<Member />} />
                    <Route path='/event' element={<EventPage />} />
                    <Route path='/event2' element={<EventPage2 />} />
                    <Route path='/naverpay' element={<NaverPay />} />
                    <Route path='/admin/*' element={<Admin />} />
                    <Route path='/home/*' element={<Home />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
