
import { useState } from 'react';
import './ReviewContent.css';
import ReviewDetailForm from './ReviewDetailForm';

const ReviewContent = ({ itemReview }) => {
    const [rendereviewDetailForm, setReviewDetailForm] = useState(false);

    const reviewDetailClick = () => {
        setReviewDetailForm(!rendereviewDetailForm)

    }

    return (
        <>
            <div onClick={reviewDetailClick} className="reviewContent">
                <div className="reviewDetail">
                    <div id="reivewImg">
                        <img src={process.env.PUBLIC_URL + 'img/itemImg/5000001_2.jpg'} alt="" />
                        <img src={process.env.PUBLIC_URL + 'img/itemImg/5000001_1.jpg'} alt="" />
                    </div>
                    <b>가성비 굳</b>
                    <p>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                </div>
                <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                </div>
                <div>가성비 굳</div>
                <div>작성자3</div>
                <div>작성일4</div>
            </div>
            {rendereviewDetailForm ? <ReviewDetailForm itemReview={itemReview} /> : <></>}

        </>

    );


}

export default ReviewContent;