
import './ReviewWrite.css';
import { useMemo, useState } from 'react';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import axios from 'axios';
import { api } from '../../../../model/model';

const ReviewWrite = ({ item, refresh, setRefresh, reviewWriteClick }) => {
    const [writeBoxClose, setWriteBoxClose] = useState(true);
    const [score, setScore] = useState(0);
    const [review, setReview] = useState({
        writer: 'manager1',
        item_code: item.code,
        title: '',
        contents: '',
        score: '0',
    });
    const [file, setfile] = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submitReview = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('writer', review.writer);
        formData.append('item_code', review.item_code);
        formData.append('title', review.title);
        formData.append('contents', review.contents);
        formData.append('score', review.score);
        if (file) {
            formData.append('uploadfilef', file);
        }
        const loginInfoString = sessionStorage.getItem('logininfo');
        const loginInfoObject = JSON.parse(loginInfoString);

        await api('/itemreview/insertmultipart', 'post', formData, "loginInfoObject.token")
            .then(res => {
                setLoading(false);
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
        setRefresh(!refresh);
        reviewWriteBoxClose();
    }

    const changeFile = (e) => {
        setfile(e.target.files[0]);
    };

    if (loading) return <Loading />
    if (error) return <Error />

    const changeReview = (event) => {
        setReview((review) => ({
            ...review,
            [event.target.name]: event.target.value
        }))
    }



    const changeScore = (event) => {
        setScore(event.target.id);
    }
    const clickScore = (event) => {
        setReview((review) => ({
            ...review,
            score: event.target.id
        }))
    }

    const resetScore = () => {
        setScore(review.score);
    }

    const reviewWriteBoxClose = () => {
        setWriteBoxClose(!writeBoxClose);
        reviewWriteClick();
    }
    return (
        <>
            {writeBoxClose &&
                <div id="reviewWriteForm" >
                    <div>
                        <div id="reviewWriteBox">
                            <h4>상품 후기 작성하기</h4>
                            <div id="reviewWriteBottom">
                                <div className="reviewWriteTag">
                                    <div>상품 이름</div>
                                    <textarea type="text" readOnly value={item.name}>{item.name}</textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>별점 주기</div>
                                    <div id='reviewWriteStarBox'>

                                        {
                                            score >= 1 ?
                                                <i id='1' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='1' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 2 ?
                                                <i id='2' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='2' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 3 ?
                                                <i id='3' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='3' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 4 ?
                                                <i id='4' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='4' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 5 ?
                                                <i id='5' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='5' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                    </div>
                                </div>
                                <div className="reviewWriteKeword">
                                    <div id='kewordSelect'>키워드 선택</div>
                                    <div id='kewordList' onChange={changeReview}>
                                        <label><input type='checkbox' id='checkbox'></input>맛있어요</label>
                                        <label><input type='checkbox' id='checkbox'></input>신선해요</label>
                                        <label><input type='checkbox' id='checkbox'></input>가성비 좋아요</label>
                                        <label><input type='checkbox' id='checkbox'></input>배송이 빨라요</label>
                                    </div>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>리뷰제목</div>
                                    <textarea onChange={changeReview} name="title" type="text" placeholder="상품 후기의 제목을 입력해주세요" value={review.title}></textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>상세리뷰</div>
                                    <textarea id='reviewWriteTag_detail' value={review.contents} onChange={changeReview} name="contents"
                                        placeholder="다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 300자 이내로 남겨주세요.
                                                            (상품 품질과 관계 없는 배송, 포장, 질문 응대, 상품 가격 등은 판매자 서비스 평가에 남겨주세요.)">
                                    </textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>사진첨부</div>
                                    <input onChange={changeFile} type='file' name='uploadfilef' />
                                </div>
                                <div id="reviewWriteContentBottom">
                                    <p>* 상품 품질과 관계 없는 내용은 비공개 처리 될 수 있습니다</p>
                                    <p>* 작성된 리뷰는 '마이페이지 - 상품 후기 관리' 에서 수정 및 삭제 가능합니다</p>
                                </div>
                            </div>
                            <div id="reviewWriteButton">
                                <button onClick={reviewWriteBoxClose} id="reviewWriteCancle">취소</button>
                                <button onClick={submitReview} id="reviewWriteEnter">등록</button>
                            </div>
                        </div>
                        <i onClick={reviewWriteBoxClose} id="reviewWriteBoxClose" className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            }
        </>
    );
}

export default ReviewWrite;