import './ItemAskForm.css';
import { useState } from 'react';


const ItemAskForm = ({item}) => {

    const [askBoxClose, setAskBoxClose] = useState(true);
    
    const itemAskBoxClose = () => {
        setAskBoxClose(false);
    }
       
    
    return (
        <>
        {askBoxClose && 
        <div id="itemAskForm">
            <div id="itemAskBox">
                <h4 >상품 문의하기</h4>
                <div id="itemAskTop">
                    <div id='itemAskImg'>
                        <img src={process.env.PUBLIC_URL + '/img/itemImg/5000100_2.jpg'} alt="" />
                    </div>
                    <div id='itemTitle'>[밀키트] 밀키트다 밀키트다</div>
                </div>
                <div id="itemAskBottom">
                    <div id='itemAskTitle'>
                        <div>제목</div>
                        <textarea type="text" placeholder="제목을 입력해주세요"></textarea>
                    </div>
                    <div id='itemAskContent'>
                        <div>내용</div>
                        <textarea type="text" placeholder="상품 문의 작성 전 확인해주세요.
                        1. 답변은 영업일 기준 2~3일 소요됩니다.
                        2. 해당 게시판은 성격과 다른 글은 사전 동의 없이 담당 게시판으로 이동될 수 있습니다.
                        3. 배송관련, 주문(취소/교환/반품)관련 문의 요청사항은 마켓컬리 1:1 문의에 남겨주세요">
                        </textarea>
                    </div>
                </div>
                <div id="itemAskPrivacy">
                    <input type="checkbox" name="privacyBox" />
                    <div>비밀글로 문의하기</div>
                </div>
                <div id="itemAskButton">
                    <button onClick={itemAskBoxClose} id="itemAskBoxCancle">취소</button>
                    <button id="itemAskBoxEnter">등록</button>
                </div>
                <div onClick={itemAskBoxClose} id="itemAskBoxClose"><i className="fa-solid fa-xmark"></i></div>
            </div>
        </div>
        }
        </>

    );
}

export default ItemAskForm;