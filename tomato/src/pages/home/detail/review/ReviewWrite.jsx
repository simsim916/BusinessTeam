
import './ReviewWriteForm.css';
import { useState } from 'react';

const ReviewWriteForm = ({ item }) => {
    const [writeBoxClose, setWriteBoxClose] = useState(true);

    function reviewWriteBoxClose() {
        setWriteBoxClose(!writeBoxClose);
    }
    return (
        <>
            {writeBoxClose &&
                <div id="reviewWriteForm" >
                    <div id="reviewWriteBox">
                        <h4>상품 후기 작성하기</h4>
                        <div id="reviewWriteTop">
                            <div id='reviewWriteImg'>
                                <img src={process.env.PUBLIC_URL + '/img/itemImg/5000100_1.jpg'} alt="" />
                            </div>
                            <div>
                                <div id="itemTitle2">{item.name}</div>
                                <div id="BasketContent">내가 주문한 내역 불러오기</div>
                                <div id='reviewStarBox'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half"></i>
                                </div>
                            </div>

                        </div>
                        <div id="reviewWriteBottom">
                            <div id="reviewWriteTitle">
                                <div>리뷰제목</div>
                                <textarea type="text" placeholder="상품 후기의 제목을 입력해주세요"></textarea>
                            </div>
                            <div id="reviewWriteContent">
                                <div>상세리뷰</div>
                                <textarea placeholder="
                        다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 300자 이내로 남겨주세요.
                        (상품 품질과 관계 없는 배송, 포장, 질문 응대, 상품 가격 등은 판매자 서비스 평가에 남겨주세요.)">
                                </textarea>
                            </div>
                            <div id="reviewWriteContentBottom">
                                <div>* 상품 품질과 관계 없는 내용은 비공개 처리 될 수 있습니다</div>
                                <div>* 작성된 리뷰는 '마이페이지 - 상품 후기 관리' 에서 수정 및 삭제 가능합니다</div>
                            </div>
                            <div id="reviewWritePhoto">
                                <div id="reviewPhoto">사진첨부</div>
                                <div>
                                    <label>사진 첨부하기</label>
                                </div>
                            </div>
                        </div>
                        <div id="reviewWriteButton">
                            <button onClick={reviewWriteBoxClose} id="reviewWriteCancle">취소</button>
                            <button id="reviewWriteEnter">등록</button>
                        </div>
                        <div onClick={reviewWriteBoxClose} id="reviewWriteBoxClose"><i className="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
            }
        </>
    );
}

export default ReviewWriteForm;