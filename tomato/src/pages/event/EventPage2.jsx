import { SERVER_RESOURCE } from "../../model/server-config";
import "./EventPage2.css";

const EventPage2 = () => {
    return (
        <div>
            <img id="eventImgLogo" src={SERVER_RESOURCE + "/img/adimg/signup.jpg"} />
            <img id="eventImgLogo" src={SERVER_RESOURCE + "/img/adimg/review.jpg"} />
            <h3 id="eventPageTitle"><i class="fa-solid fa-star"></i> SPECIAL CUPON<i class="fa-solid fa-star"></i></h3>
            <div id="eventCuponForm">
                <div id="eventIMG">
                    <img id="joinCupon" src={SERVER_RESOURCE + "/img/adimg/coupon.png"} />
                    <div>행사내용</div>
                    <span>회원가입 시 ID당 1회 증정</span>
                    <div>사용기간</div>
                    <span>발급일로부터 1주일</span>
                    <div>로그인 시 자동지급<br></br><i class="fa-solid fa-circle-arrow-right"></i></div>
                </div>
                <div id="eventIMG">
                    {/* <img id="eventCupon" src={SERVER_RESOURCE + "/img/adimg/coupon.png"} /> */}
                    <img id="reveiwCupon" src={SERVER_RESOURCE + "/img/adimg/review.png"} />
                    <div>행사내용</div>
                    <span>상품  베스트 후기 선정 시 쿠폰 증정</span>
                    <div>사용기간</div>
                    <span>발급일로부터 30일</span>
                    <div>로그인 시 자동지급<br></br><i class="fa-solid fa-circle-arrow-right"></i></div>
                </div>
            </div>
            
            <div id="levelPointForm">
                <h3>토마토팜 등업 & 포인트 혜택</h3>
                <div id="levelPointBox">
                    <div id="level_Box">
                        <div>레드등급</div>
                        <div>20%</div>
                        <span>최대 20%할인 혜택</span>
                        <span>레드등급 혜택기간 등업일 ~ 1년</span>
                    </div> 
                        <div id="levelPlusPoint"><i class="fa-solid fa-plus"></i></div>    
                    <div id="level_point">
                        <div>포인트</div>
                        <div>3만원</div>
                        <span>20만원 이상 구매 시</span>
                        <span>포인트 사용기간 혜택 신청일 ~ 2024.12.31</span>
                    </div>    
                </div>

                <div>
                    <div>행사기간</div>
                    <span>2024.1.1 ~ 2024.12.31</span>
                    <div>행사대상</div>
                    <span>상품 구매 내역 우수 회원</span>
                    <div>행사내용</div>
                    <span>한 ID당 기간 내 1회 참여 가능</span>
                    <div>참여방법</div>
                    <span>1. 쿠폰 다운로드 및 쿠폰번호 복사</span>
                    <span>2. 아래 쿠폰번호 입력란에 쿠폰번호 입력 후 혜택 받기</span>
                    <input type="text" placeholder="쿠폰번호 12자리를 입력해 주세요."></input>
                </div>
            </div>
        </div>









    );
}



export default EventPage2;