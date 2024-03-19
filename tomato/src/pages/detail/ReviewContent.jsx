
import './ReviewContent.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewContent = ({ itemReview }) => {


    function showContent() {

    }

    return (
        <>
            <div onClick={showContent} className="boardRow">
                <div>미답변</div>
                <div>{itemReview.title}</div>
                <div>{itemReview.writer}</div>
                <div>{itemReview.regdate}</div>
                <div className="askContents"> {itemReview.contents}
                    <a>답변</a>
                    <a>삭제</a>
                </div>
            </div>
        </>

    );


}

export default ReviewContent;