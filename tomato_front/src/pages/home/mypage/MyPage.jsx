import { useState } from 'react';
import './MyPage.css'
import Mydata from './mydata/Mydata';
import OrderList from './orderList/OrderList';

const Mypage = () => {
    const [content, setContent] = useState('Mydata');
    return (
        <div id='mypage' className="container">
            <h3><i className="fa-solid fa-user"></i> 마이페이지 <i className="fa-solid fa-user"></i></h3>
            <ul id='mypage_nav'>
                <li onClick={() => setContent('Mydata')}>my 정보 </li>
                <li onClick={() => setContent('Myorder')} >my 주문 목록</li>
            </ul>
            <div id='mypage_content'>
                {content == 'Mydata' && <Mydata />}
                {content == 'Myorder' && <OrderList />}
            </div>
        </div>
    );
}

export default Mypage;