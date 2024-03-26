import "./SelectAskBoxRow.css";
import { useState } from 'react';
import WriteReply from './WriteReply';


const SelectAskBoxRow = ({ ask }) => {
    const currentDate = new Date();
    const [writeReply, setWriteReply] = useState(false);

    const openWriteReply = (e) => {
        setWriteReply(true);
    }

    return (
        <div onClick={openWriteReply}>
            <div>{ask.seq}</div>
            <div>
                {ask.title}
                {currentDate.getTime() - new Date(ask.regdate).getTime() <= 3 * 24 * 60 * 60 * 1000
                    ?
                    (
                        <span className="latestAnnounce">
                            <i className="fa-solid fa-n"></i>
                        </span>
                    )
                    :
                    null
                }
            </div>
            <div>{ask.writer}</div>
            <div>{ask.regdate}</div>
            <div>{ask.privacy === 0 ? '미답변' : '답변'}</div>
            {writeReply ? <WriteReply ask={ask} setWriteReply={setWriteReply} /> : null}
        </div>
    );
}

export default SelectAskBoxRow;