import { useState } from 'react';
import './MyPage.css'
import Mydata from './mydata/Mydata';
import OrderList from './orderList/OrderList';
import { Link, Route, Routes } from 'react-router-dom';

const Mypage = () => {
    const [content, setContent] = useState('Mydata');
    return (
        <div id='mypage' className="container">
            <h3><i className="fa-solid fa-user"></i> 마이페이지 <i className="fa-solid fa-user"></i></h3>
            <ul id='mypage_nav'>
                <li><Link to='/home/mypage'>my 정보</Link></li>
                <li><Link to='/home/mypage/order'>my 주문 목록</Link></li>
            </ul>
            <div id='mypage_content'>

                <Routes>
                    <Route path='/order' element={<OrderList />} />
                    <Route path='/*' element={<Mydata />} />
                </Routes>
            </div>
        </div>
    );
}

export default Mypage;