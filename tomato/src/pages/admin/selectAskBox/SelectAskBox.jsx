import "./SelectAskBox.css";
import { useEffect, useState } from 'react';
import axios from 'axios';


const SelectAskBox = () => {

    const [askList, setAskList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemask/select`
        ).then(res => {
            console.log(res.data);
            setAskList(res.data);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])

    return (
        <div class="container">
            <div id="annTopBox">
                <h3>문의글
                    &nbsp;&nbsp;
                    <label htmlFor="">답변&nbsp;
                        <input type="checkbox" />
                    </label>
                    &nbsp;&nbsp;
                    <label htmlFor="">미답변&nbsp;
                        <input type="checkbox" />
                    </label>
                </h3>
            </div>
            <div id="announceBoard" class="appearContainer">
                <form>
                    <select name="" id="">
                        <option value="">------</option>
                        <option value="">------</option>
                    </select>
                    &nbsp;&nbsp;
                    <input type="text" />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div>
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일시</div>
                    <div>조회수</div>
                </div>
                <div onclick="showContent(this)">
                    <div class="contentBox ">
                        <i class="fa-solid fa-bullhorn"></i>
                        <div> - 토마토팜 홈페이지 이용시 - </div>
                        <p>2024-02-02일 이후 토마토팜에서는 브랜드 '김구원선생' 제품의 판매를 중단합니다. 이미 주문한 상품은 발송 예정이며, 재고가 남은 상품은 재고소진시까지
                            홈페이지에 등록 되어있을 예정입니다. 자세한 내용은 1577-1577로 문의 부탁 드립니다.
                        </p>
                        <a href="#">수정</a>
                        <a href="#">삭제</a>
                    </div>
                    <div>공지</div>
                    <div>토마토팜 홈페이지 이용시 </div>
                    <div><img src="/tomatoFarmA/resources/img/logo.png" alt="" /></div>
                    <div>2024-02-02 11:11</div>
                    <div>77</div>
                </div>
                <div onclick="showContent(this)">
                    <div class="contentBox ">
                        <i class="fa-solid fa-bullhorn"></i>
                        <div> - 명절 배송지연 관련 공지사항 - </div>
                        <p>2024-02-02일 이후 토마토팜에서는 브랜드 '김구원선생' 제품의 판매를 중단합니다. 이미 주문한 상품은 발송 예정이며, 재고가 남은 상품은 재고소진시까지
                            홈페이지에 등록 되어있을 예정입니다. 자세한 내용은 1577-1577로 문의 부탁 드립니다.
                        </p>
                        <a href="#">수정</a>
                        <a href="#">삭제</a>
                    </div>
                    <div><img src="/tomatoFarmA/resources/img/logo.png" alt="" /></div>
                    <div>명절 배송지연 관련 공지사항</div>
                    <div>홍길동</div>
                    <div>2024-02-02 11:11</div>
                    <div>77</div>
                </div>

                {/* ===================================== */}
                {askList.map((askRow, i) => {
                    <div onclick="showContent(this)">
                        <div>{askRow.seq}</div>
                        <div>'프레시지' 명절 할인 상품 공지<span class="latestAnnounce"><i class="fa-solid fa-n"></i></span>
                        </div>
                        <div>홍길동</div>
                        <div>2024-02-02 11:11</div>
                        <div>77</div>
                    </div>
                })}
                {/* <div onclick="showContent(this)">
                    <div>9</div>
                    <div>우리 팀 파이팅<span class="latestAnnounce"><i class="fa-solid fa-n"></i></span></div>
                    <div>홍길동</div>
                    <div>2024-02-02 11:11</div>
                    <div>77</div>
                </div> */}

            </div>
            <div id="NationContainer">
                <img src="/tomatoFarmA/resources/img/logo.png" alt="" id="tomatoChess" />
                <div><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-left"></i></div>
                <div onclick="changePage(this)" value="1">*</div>
                <div onclick="changePage(this)" value="2">*</div>
                <div onclick="changePage(this)" value="3">*</div>
                <div onclick="changePage(this)" value="4">*</div>
                <div onclick="changePage(this)" value="5">*</div>
                <div><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    );
}

export default SelectAskBox;