import './BestItemBox.css';


const BestItemBox = ({item}) => {


    return (
        <>
            <div id="bestItemTitle">추천상품</div>
            <div id="bestItemContainer">
                <div id="containerOption"></div>
                <a href="detail?code=5000001">
                    <div className="itemBox">
                        <img src="/tomatoFarmA/resources/img/itemImg/5000001_1.jpg" alt="샤브샤브밀키트" />
                        <div className="itemName">샤브샤브밀키트</div>
                        <div className="itemInfo">채선당</div>
                        <p className="itemPrice">15980원</p>
                        <div className="itemOption">무료배송</div>
                    </div>
                </a>
                <a href="detail?code=5000002">
                    <div className="itemBox">
                        <img src="/tomatoFarmA/resources/img/itemImg/5000002_1.jpg" alt="월남쌈 밀키트" />
                        <div className="itemName">월남쌈 밀키트</div>
                        <div className="itemInfo">도리깨침</div>
                        <p className="itemPrice">21200원</p>
                        <div className="itemOption">무료배송</div>
                    </div>
                </a>
                <a href="detail?code=5000003">
                    <div className="itemBox">
                        <img src="/tomatoFarmA/resources/img/itemImg/5000003_1.jpg" alt="두부된장찌개 밀키트" />
                        <div className="itemName">두부된장찌개 밀키트</div>
                        <div className="itemInfo">김구원선생</div>
                        <p className="itemPrice">6700원</p>
                        <div className="itemOption">무료배송</div>
                    </div>
                </a>
                <a href="detail?code=5000004">
                    <div className="itemBox">
                        <img src="/tomatoFarmA/resources/img/itemImg/5000004_1.jpg" alt="강릉식짬뽕순두부 밀키트" />
                        <div className="itemName">강릉식짬뽕순두부 밀키트</div>
                        <div className="itemInfo">바른식</div>
                        <p className="itemPrice">6675원</p>
                        <div className="itemOption">무료배송</div>
                    </div>
                </a>
            </div>
    </>
    );

}