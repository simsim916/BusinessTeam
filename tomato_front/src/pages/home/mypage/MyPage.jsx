import './MyPage.css'
import Mydata from './mydata/Mydata';

const Mypage = ()=>{
    return (
        <div id='mypage' className="container">
            <h3><i className="fa-solid fa-user"></i> 마이페이지 <i className="fa-solid fa-user"></i></h3>
            <ul id='mypage_nav'>
                <li>my 정보 </li>
                <li>my 주문 목록</li>
            </ul>
            <div id='mypage_content'>
                <Mydata />
            </div>
        </div>
    );
}

export default Mypage;