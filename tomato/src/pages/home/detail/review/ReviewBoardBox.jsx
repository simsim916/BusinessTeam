import './ReviewBoardBox.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import ReviewContent from './ReviewBoardRow';
import ReviewWriteForm from './ReviewWrite';
import PagingBox from '../../../components/PagingBox';
import ReviewBoardRow from './ReviewBoardRow';
import ReviewWrite from './ReviewWrite';


const ReviewBoardBox = ({ item }) => {
    const [itemReviewList, setItemReviewList] = useState(null);
    const [refresh, setRefrsh] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [reviewWrite, setReviewWrite] = useState(false);
    const [limit, setLimit] = useState(5);
    const [currPage, setCurrPage] = useState(1);
    const [pageList, setPageList] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemreview/select?column=item_code&keyword=${item.code}`
        ).then(res => {
            setLoading(false);
            setItemReviewList(res.data);
            setPageList(res.data);
            setCurrPage(1);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [refresh])

    if (loading) return <Loading />
    if (error) return <Error />

    const reviewWriteClick = () => {
        setReviewWrite(!reviewWrite);
    }

    const paging = () => (list, currPage, limit) => {
        if (list != null) {
            const start = limit * (currPage - 1);
            const end = currPage * limit;
            return list.slice(start, end);
        }
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
                    {pageList.length > 0 ?
                        paging()(pageList, currPage, limit).map((e, i) => <ReviewBoardRow itemReview={e} key={i} />)
                        :
                        <div id='reviewNone'>
                            해당 상품에 후기가 없습니다.
                        </div>
                    }
                </div>

                {/* <div id="reviewBoardBtn">
                    <i className="fa-solid fa-angles-left"></i>
                    <i className="fa-solid fa-angle-left"></i>
                    <span> 1 </span>
                    <span> 2 </span>
                    <span> 3 </span>
                    <i className="fa-solid fa-angle-right"></i>
                    <i className="fa-solid fa-angles-right"></i>
                </div> */}
                <PagingBox
                    list={pageList}
                    limit={limit}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />
                {reviewWrite ? <ReviewWrite refresh={refresh} setRefrsh={setRefrsh} item={item} reviewWriteClick={reviewWriteClick} /> : null}
            </div>
        </>
    );
}

export default ReviewBoardBox;