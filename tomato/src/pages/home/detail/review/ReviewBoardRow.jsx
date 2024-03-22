
import { useState } from 'react';
import './ReviewBoardRow.css';
import ReviewWrite from './ReviewWrite';

const ReviewBoardRow = ({ itemReview }) => {
    const [rendereviewDetailForm, setReviewDetailForm] = useState(false);

    const reviewDetailClick = () => {
        setReviewDetailForm(!rendereviewDetailForm)

    }

    return (
        <>
            <div onClick={reviewDetailClick} className="reviewContent">
                <div className='ReviewBoardRow_img'>
                    <img src={process.env.PUBLIC_URL + 'img/itemImg/5000001_2.jpg'} alt="" />
                </div>
                <div className='ReviewBoardRow_text'>
                    <div className='ReviewBoardRow_rightTop'>
                        <div className='ReviewBoardRow_score'>
                            {
                                itemReview.score >= 1 ?
                                    <i id='1' className="fa-solid fa-star"></i>
                                    :
                                    <i id='1' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 2 ?
                                    <i id='2' className="fa-solid fa-star"></i>
                                    :
                                    <i id='2' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 3 ?
                                    <i id='3' className="fa-solid fa-star"></i>
                                    :
                                    <i id='3' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 4 ?
                                    <i id='4' className="fa-solid fa-star"></i>
                                    :
                                    <i id='4' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 5 ?
                                    <i id='5' className="fa-solid fa-star"></i>
                                    :
                                    <i id='5' className="fa-regular fa-star"></i>
                            }
                        </div>
                        <p className='ReviewBoardRow_date'>{itemReview.regdate}</p>
                    </div>
                    <div className='ReviewBoardRow_toptag'>
                        <p>가성비 좋아요</p>
                    </div>
                    <span className='ReviewBoardRow_title'>{itemReview.title}</span>
                    <span className='ReviewBoardRow_wirter'>{itemReview.writer}</span>
                    <div className="reviewDetail">
                        <p>{itemReview.contents}</p>
                    </div>
                </div>
            </div>
            {rendereviewDetailForm ? <ReviewWrite itemReview={itemReview} /> : <></>}

        </>

    );


}

export default ReviewBoardRow;