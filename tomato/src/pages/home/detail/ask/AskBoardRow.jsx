import './AskBoardBox.css';


const BaordRow = ({ itemAsk }) => {

    function showContent() {

    }
    return (
        <>
            {itemAsk ?
                <div onClick={showContent} className="boardAnswer">
                    <div>
                        {
                            itemAsk.privacy == 1 ?
                                <i class="fa-solid fa-lock"></i>
                                : <i class="fa-solid fa-lock-open"></i>
                        }
                    </div>
                    <div>미답변</div>
                    <div>{itemAsk.title}</div>
                    <div>{itemAsk.writer}</div>
                    <div>{itemAsk.regdate}</div>
                    <div class="askContents">{itemAsk.content}
                        <a>답변</a>
                        <a>삭제</a>
                    </div>
                </div>
                :
                <div id='askNone'>
                    해당 상품에 문의사항이 없습니다.
                </div>
            }
        </>
    );
}

export default BaordRow;