import './ItemAskWrite.css';
import { useState } from 'react';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import axios from 'axios';


const ItemAskForm = ({ item, setRefresh, refresh }) => {

    const [askBoxClose, setAskBoxClose] = useState(true);
    const [ask, setAsk] = useState({
        item_code: item.code,
        writer: 'manager1',
        title: '',
        contents: '',
        reply: '',
    })
    // const [askPassword, setAskPassword] = useState({
    //     value{
    //         password: ''
    //     },
    //     error: {
    //         password: null
    //     },
    //     check: {
    //         password:false
    // },
        
    // })

    const changeAsk = (event) => {
    //     setAsk((ask) => ({
    //         ...ask,
    //         [event.target.name]: event.target.value
    //     }))
    }

    const submitAsk = async () => {
        await axios.post(`http://localhost:8090/itemask/askinsert`, ask, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setLoading(false);
            console.log('제출성공')
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        });
        setRefresh(!refresh);
        itemAskBoxClose()
    }

    const itemAskBoxClose = () => {
        setAskBoxClose(!askBoxClose);
    }

// const checkPassword = (event) => {
//     let value = event.target.value;
//     const passwordAsk = event.target.closest('div');
//     let message = '';
//     let check = false;
//     let key = /[0-9]/gi;

//     if (value.length == 4) {
//         passwordAsk.style.border = "2px solid #FF3F3F";
//         message = `비밀번호는 4글자로 입력해주세요.`;
//     } else {
//         passwordBox.style.border = "2px solid #03C75A";
//         passwordBox.children[0].style.color = "#03C75A";
//         check = true;
//     }
//     return {
//         message: message,
//         check:check
//     }
// }



    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

    return (
        <>
            {askBoxClose &&
                <div id="itemAskForm">
                    <div>
                        <div id="itemAskBox">
                            <h4 >상품 문의하기</h4>
                            <div id="itemAskTop">
                                <div id='itemAskImg'>
                                    <img src={process.env.PUBLIC_URL + '/img/itemImg/5000100_2.jpg'} alt="" />
                                </div>
                                <div id='itemTitle'>{item.name}</div>
                            </div>
                            <div id="itemAskBottom">
                                <div id='itemAskTitle'>
                                    <div>제목</div>
                                    <textarea onChange={changeAsk} name='title' type="text" placeholder="제목을 입력해주세요" value={ask.title}></textarea>
                                </div>
                                <div id='itemAskContent'>
                                    <div>내용</div>
                                    <textarea id='askWriteTag_detail' name='contents' type="text" value={ask.contents} onChange={changeAsk}
                                        placeholder="상품 문의 작성 전 확인해주세요.
                                1. 답변은 영업일 기준 2~3일 소요됩니다.
                                2. 해당 게시판은 성격과 다른 글은 사전 동의 없이 담당 게시판으로 이동될 수 있습니다.
                                3. 배송관련, 주문(취소/교환/반품)관련 문의 요청사항은 마켓컬리 1:1 문의에 남겨주세요">
                                    </textarea>
                                </div>
                            </div>
                            <div id='itemAskPrivacyBox'>
                                <div id="itemAskPrivacy">
                                    <input type="checkbox" name="privacyBox" />
                                    <div>비밀글로 문의하기</div>
                                </div>
                                <input type='passwordAsk' id='passwordAsk' name='passwordAsk' placeholder='숫자 4개로 비밀번호를 입력해주세요.'></input>
                            </div>
                            <div id="itemAskButton">
                                <button onClick={itemAskBoxClose} id="itemAskBoxCancle">취소</button>
                                <button onClick={submitAsk} id="itemAskBoxEnter">등록</button>
                            </div>
                        </div>
                        <div onClick={itemAskBoxClose} id="itemAskBoxClose"><i className="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
            }
        </>

    );
}

export default ItemAskForm;