import { useState } from 'react';
import './AskBoardRow.css';


const AskBaordRow = ({ itemAsk }) => {
    const [askDetail, setAskDetail] = useState(false);

    const contentsDetail = document.getElementsByClassName('boardAnswer_content');
    const showContent = () => {
        setAskDetail(!askDetail);
    }

    return (
        <>
        <div onClick={showContent} className="boardAnswer">
            <div>
                {
                    itemAsk.privacy == 1 ?
                        <i className="fa-solid fa-lock"></i>
                        : <i className="fa-solid fa-lock-open"></i>
                }
            </div>
            <div className="boardAnswer_reply">미답변</div>
                <div onClick={showContent} className="boardAnswer_title">{itemAsk.title}</div>
            <div className="boardAnswer_writer">{itemAsk.writer}</div>
            <div className="boardAnswer_regdate">{itemAsk.regdate}</div>
            </div>
            <div>
                {askDetail &&
                    <div className="boardAnswer_content">{itemAsk.contents}
                        {/* <a>답변</a>
                <a>삭제</a> */}
                </div>
                }
            </div>
    </>
    );
}

export default AskBaordRow;