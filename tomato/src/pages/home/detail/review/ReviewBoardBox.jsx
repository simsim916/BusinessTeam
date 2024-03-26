import './ReviewBoardBox.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import ReviewContent from './ReviewBoardRow';
import ReviewWriteForm from './ReviewWrite';
import PagingBox from '../../../admin/PagingBox';


const ReviewBoardBox = ({ item }) => {
    console.log('ReviewBoardBox 랜더링')
    const [itemReviewList, setItemReviewList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [pagingList, setPagingList] = useState(null);

    const [reviewWrite, setReviewWrite] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemreview/select?column=item_code&keyword=${item.code}`
        ).then(res => {
            setItemReviewList(res.data);
            setPagingList(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    const reviewWriteClick = () => {
        setReviewWrite(!reviewWrite);
    }

    const paging = () => (list, pageNum, size) => {
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return list.slice(start, end);
    }

    return (
        <>
            <div id="reviewBoardBox" className="container appearContainer">
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

                {pagingList ?
                    paging()(pagingList, currPage, limit).map((e, i) => <ReviewContent itemReview={e} key={i} />)
                    : ''}

                <PagingBox
                    limit={limit}
                    list={itemReviewList}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
                {reviewWrite ? <ReviewWriteForm item={item} reviewWriteClick={reviewWriteClick} /> : null}

            </div>
        </>
    );


}

export default ReviewBoardBox;