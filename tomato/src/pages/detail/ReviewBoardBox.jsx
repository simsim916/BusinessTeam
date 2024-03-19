import './ReviewBoardBox.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewContent from './ReviewContent';
import Loading from './../components/Loading';
import Error from './../components/Error';


const ReviewBoardBox = ({ itemCode }) => {
    const [itemReviewList, setItemReviewList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemreview/select/${itemCode}`
        ).then(res => {
            setItemReviewList(res.data);
            console.log(itemReviewList)
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    function reviewWriteClick() {

    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <>
            <div id="ReviewBoardBox" className="container appearContainer">
                <h5>상품후기</h5>
                <span>한줄리뷰 - 제목을 클릭하시면 상세내용을 보실 수 있습니다.</span>
                <div onClick={reviewWriteClick} id="reviewWrite"> 후기작성 </div>
                <div id="reviewBoard">
                    <div className="reviewBoardRow">
                        <div>별점</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>등록일</div>
                    </div>
                </div>
                {itemReviewList ? (itemReviewList.map((e, i) => <ReviewContent itemReview={e} key={i} />)) : ('')}

                <div id="reviewBoardBtn">
                    <i className="fa-solid fa-angles-left"></i>
                    <i className="fa-solid fa-angle-left"></i>
                    <span> 1 </span>
                    <span> 2 </span>
                    <span> 3 </span>
                    <i className="fa-solid fa-angle-right"></i>
                    <i className="fa-solid fa-angles-right"></i>
                </div>
            </div>
        </>
    );


}

export default ReviewBoardBox;