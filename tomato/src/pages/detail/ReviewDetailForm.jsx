import './ReviewDetailForm.css';
import { useState } from 'react';


const ReviewDetailForm = ({ itemReview }) => {

    const [detailBoxClose, setDetailBoxClose] = useState(true);

    const reivewDetailImgChange = () => {

    }

    const reviewDetailClose = () => {
        setDetailBoxClose(false);

    }

    return (
        <>
            <div id="reviewDetailForm">
                <div id="reviewDetailBox">
                    <div id="reviewDetailImg">
                        <div id="reviewDetailImgTop">
                            <img src={process.env.PUBLIC_URL + '/img/itemImg/5000001_2.jpg'} alt="" />
                            <i className="fa-solid fa-arrow-left"></i>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <div id="reviewDetailImgBottom">
                            <img onClick={reivewDetailImgChange} src={process.env.PUBLIC_URL + '/img/itemImg/5000001_1.jpg'} alt="" />
                            <img onClick={reivewDetailImgChange} src={process.env.PUBLIC_URL + '/img/itemImg/5000001_2.jpg'} alt="" />
                        </div>
                    </div>
                    <div id="reviewDetail_Write">
                        <p>{itemReview.name}</p>
                        <p>{itemReview.writer}</p>
                        <p>작성 날짜</p>
                        <p id="reviewDetail_Final">후기다 후기다 후기다
                            후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다
                            후기다 후기다
                            후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다
                        </p>
                    </div>
                    <div onClick={reviewDetailClose} id="reviewDetailBoxClose"><i className="fa-solid fa-xmark"></i></div>
                </div>
            </div>
        </>





    );
}

export default ReviewDetailForm;