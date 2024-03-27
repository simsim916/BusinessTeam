import './ShopBasketPayBox.css';

const ShopBasketPayBox = () => {
   
   
    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>5000원</div>
                    </div>
                    <div>상품할인금액
                        <div>10%할인</div>
                    </div>
                    <div>배송비
                        <div>무료배송</div>
                    </div>
                    <div>결제예정금액
                        <div>4500원</div>
                    </div>
                </div>
            </div>
            <div id="loginBox">로그인</div>
            <div id="shopBasketCancel">
                <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
            </div>
        </div>






    );



}