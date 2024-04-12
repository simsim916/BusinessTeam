import "./SelectAskBox_Row.css";
import { useState } from 'react';
import WriteReply from '../writeReply/WriteReply';


const SelectAskBox_Row = ({ ask }) => {
    const currentDate = new Date();
    const [writeReply, setWriteReply] = useState(false);
    console.log(ask)
    const openWriteReply = (e) => {
        setWriteReply(true);
    }

    return (
        <div className="selectAskBox_Row" onClick={openWriteReply}>
            <div>{ask.seq}</div>
            <div>{ask.type}</div>
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
            <div>{new Date(ask.regdate).toLocaleString("ko-KR", {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })}</div>
            <div>{ask.reply == "" ? '미답변' : '답변'}</div>
            {writeReply ? <WriteReply ask={ask} setWriteReply={setWriteReply} /> : null}
        </div >
    );
}

export default SelectAskBox_Row;