import './ItemAskWrite.css';
import { useState } from 'react';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import axios from 'axios';


const ItemAskForm = ({ item, setRefresh, refresh, itemAskClick }) => {

    const [askBoxClose, setAskBoxClose] = useState(true);
    const [checked, setChecked] = useState(false);
    const [ask, setAsk] = useState({
        item_code: item.code,
        writer: 'manager1',
        title: '',
        contents: '',
        reply: '',
        password: null
    })

    const changeAsk = (event) => {
        setAsk((ask) => ({
            ...ask,
            [event.target.name]: event.target.value
        }))
    }

    const changeChecked = () => {
        setChecked(!checked)
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
        itemAskBoxClose();
    }

    const itemAskBoxClose = () => {
        setAskBoxClose(!askBoxClose);
        itemAskClick();
    }

    const maxLengthCheck = (event) => {
        if (event.target.value.length > event.target.maxLength) {
            event.target.value = event.target.value.slice(0, event.target.maxLength);
        }
    }

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
                                <div id='itemTitle'>
                                    {item.name}
                                    <div id='itemAskPrivacyContainer'>
                                        <div id='itemAskPrivacyBox'>
                                            <label id="itemAskPrivacy">
                                                <input type="checkbox" name="privacyBox" onChange={changeChecked} checked={checked} />
                                                비밀글로 문의하기
                                            </label>
                                            {checked && <input type='number' id='passwordAsk' name='password' value={ask.password} onChange={changeAsk} onInput={maxLengthCheck} maxlength="4" placeholder='4자리 숫자' /> }
                                        </div>
                                    </div>
                                </div>

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