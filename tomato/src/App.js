import "./default.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginForm from "./pages/login/loginForm/LoginForm";
import EventPage from "./pages/event/EventPage";
import Admin from "./pages/admin/Admin";
import React from 'react';
import ShopBasketSelectBox from './pages/shopBasket/ShopBasketSelectBox';
import { Provider } from 'react-redux';
import store from "./pages/redux/store";
import ReduxTest from "./pages/ReduxTest";
import ChatBotBox from './pages/home/chatbot/ChatBotBox';

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/signup' element={<LoginForm />} />
                    <Route path='/event' element={<EventPage />} />
                    <Route path='/admin/*' element={<Admin />} />
                    <Route path='/home/*' element={<Home />} />
                    <Route path='/test' element={<ReduxTest />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/chatBot' element={<ChatBotBox />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
