
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
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <p className='ReviewBoardRow_date'>작성일4</p>
                    </div>
                    <div className='ReviewBoardRow_toptag'>
                        <p>가성비 굳</p>
                    </div>
                    <span className='ReviewBoardRow_title'>가격이 저렴하고 맛있네요</span>
                    <span className='ReviewBoardRow_wirter'>작성자3</span>
                    <div className="reviewDetail">
                        <p>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                    </div>
                </div>
            </div>
            {rendereviewDetailForm ? <ReviewWrite itemReview={itemReview} /> : <></>}

        </>

    );


}

export default ReviewBoardRow;