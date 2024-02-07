<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 폰트어썸 -->
        <script src="https://kit.fontawesome.com/d68045e863.js" crossorigin="anonymous"></script>
        <!-- 구글 폰트 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="/tomatoFarm/resources/css/00default.css">
        <link rel="stylesheet" href="/tomatoFarm/resources/css/00header.css">
        <script defer type="text/javascript" src="/tomatoFarm/resources/js/00header.js"></script>
        <link rel="stylesheet" href="/tomatoFarm/resources/css/itemDetail.css">
		<title>토마토팜 || 상품내용</title>
</head>
<c:set var="d" value="${requestScope.dto}" />
<body>
    <header id="topBar">
        <div id="loginBar">
            <div class="container">
                <a href="">고객센터</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="">로그인</a>
            </div>
        </div>
    
        <div id="searchBar">
            <div class="container">
                <div id="logoBox">
                    <img src="/img/logo.png" alt="">
                    <h1>사이트이름</h1>
                </div>
                <form id="searchBox">
                    <input type="text" placeholder="검색어를 입력해주세요.">
                    <i class="fa-solid fa-circle-xmark"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <div id="searchRightBox">
                    <div id="myPage">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div id="myCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div id="myItem">
                        <i class="fa-solid fa-box-archive"></i>
                    </div>
                </div>
            </div>
        </div>
    
        <nav>
            <div class="container">
                <div id="categoryBox">
                    <div onmouseover="firstCategoryVisible()" id="categoryTag"><i
                            class="fa-solid fa-bars"></i>&nbsp;&nbsp;&nbsp;카테고리</div>
                    <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()" id="firstCategory">
                        <li></li>
                        <li id="firstCategorySearch">
                            <div>
                                <input type="text"><i class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        <li><img src="/img/category_vitamin.png" alt="category_vitamin">건강식품</li>
                        <li><img src="/img/category_chicken.png" alt="category_chicken">계육</li>
                        <li><img src="/img/category_etc.png" alt="category_etc">기타</li>
                        <li><img src="/img/category_wheat.png" alt="category_wheat">농산가공</li>
                        <li><img src="/img/category_pig.png" alt="category_pig">돈육</li>
                        <li><img src="/img/category_noodle.png" alt="category_noodle">면류</li>
                        <li><img src="/img/category_flour.png" alt="category_flour">분말류</li>
                        <li><img src="/img/category_blush.png" alt="category_blush">생활용품</li>
                        <li><img src="/img/category_detergent.png" alt="category_detergent">세제류</li>
                        <li><img src="/img/category_fish.png" alt="category_fish">수산가공</li>
                        <li><img src="/img/category_vegetable.png" alt="category_vegetable">야채</li>
                        <li><img src="/img/category_wheat.png" alt="category_wheat">양곡</li>
                        <li><img src="/img/category_sheep.png" alt="category_sheep">양육</li>
                        <li><img src="/img/category_seashel.png" alt="category_seashel">어패류</li>
                        <li><img src="/img/category_cow.png" alt="category_cow">우육</li>
                        <li><img src="/img/category_cheese.png" alt="category_cheese">유제품</li>
                        <li><img src="/img/category_oils.png" alt="category_oils">유지류</li>
                        <li><img src="/img/category_drink.png" alt="category_drink">음료ㆍ차</li>
                        <li><img src="/img/category_gimbap.png" alt="category_gimbap">일반가공</li>
                        <li><img src="/img/category_bread.png" alt="category_bread">제과</li>
                        <li><img src="/img/category_cookedFood.png" alt="category_cookedFood">조리식품</li>
                        <li><img src="/img/category_seasoning.png" alt="category_seasoning">조미식품</li>
                        <li><img src="/img/category_fruit.png" alt="category_fruit">청과</li>
                        <li><img src="/img/category_meat.png" alt="category_meat">축산가공</li>
                        <li><img src="/img/category_seaweed.png" alt="category_seaweed">해조류</li>
                    </ul>
                    <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()" id="secondCategory">
                        <li></li>
                        <li id="secondCategorySearch">
                            <div>
                                <input type="text"><i class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        <li>채소</li>
                        <li>과일ㆍ견과ㆍ쌀</li>
                        <li>수산ㆍ해산ㆍ건어물</li>
                        <li>정육ㆍ가공육ㆍ계란</li>
                        <li>국ㆍ반찬ㆍ메인요리</li>
                        <li>간편식ㆍ밀키트ㆍ샐러드</li>
                        <li>면ㆍ양념ㆍ오일</li>
                        <li>생수ㆍ음료ㆍ커피</li>
                        <li>간식ㆍ과자ㆍ떡</li>
                        <li>베이커리</li>
                        <li>유제품</li>
    
                    </ul>
                </div>
                <ul id="navBar">
                    <li>식단 주문</li>
                    <li>재료 주문</li>
                    <li>이벤트</li>
                </ul>
            </div>
        </nav>
    
    
    </header>
    
    <main id="itemDetailBox" class="container">
        <div id="imgBox">
            <div id="imgBoxImg">
                <img src="/tomatoFarm/resources/img/itemImg/${d.code}_1.jpg" alt="${d.name} 사진">
            </div>
            <div id="imgBoxImgList">
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_1.jpg" alt="${d.name} 조리"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_2.jpg" alt="${d.name} 제품"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_3.jpg" alt="${d.name} 구성품"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_4.jpg" alt="${d.name} 상세표기"></div>
            </div>
        </div>

        <div id="itemDetailSM">
            <div id="itemDetailTitle">
                <div id="title1">새벽배송</div>
                <div id="title2">${d.name}</div>
                <div id="title3">${d.name} 신선하고 맛있어요</div>
<c:if test="${d.discount != 0}">
                <span id="title4">${d.discount}<span>%</span></span>
                <div id="title5">${d.price}원</div>
                <div id="title6">${d.price-(d.price*d.discount/100)}원</div>
</c:if>
<c:if test="${d.discount == 0}">
                <div id="title6">${d.price}원</div>
</c:if>
            </div>
            <div>배송</div>
<c:if test="${d.delivery != 0}">
            <div>${d.delivery}원<br>(23시 전 주문 시 내일 아침 7시 전 도착)</div>
</c:if>
<c:if test="${d.delivery == 0}">
            <div>무료배송<br>(23시 전 주문 시 내일 아침 7시 전 도착)</div>
</c:if>
            <div>제조사</div>
            <div>${d.brand}</div>
            <div>포장타입</div>
            <div>${d.storage}</div>
            <div>판매단위</div>
<c:if test="${d.packing =='pk'}">
            <div>1팩</div>
</c:if>
<c:if test="${d.packing == 'box'}">
            <div>1박스</div>
</c:if>
            <div>중량/용량</div>
            <div>${d.weight}g</div>
            <div>유통기한</div>
            <div>수령일 포함 180일 이상 남은 제품을 보내드립니다.</div>
            <div id="itemSelect">
                <div>수량 선택</div>
                <div id="countBox">
                    <button><i class="fa-solid fa-plus"></i></button>
                    <input type="text">
                    <button><i class="fa-solid fa-minus"></i></button>
                </div>
                <div id="priceBox">
                    <div id="price">총 상품금액&nbsp; : &nbsp;<span>30000원</span></div>
                    <div id="cart">장바구니 담기</div>
                    <div id="buy">구매하기</div>
                </div>
            </div>

        </div>

        
    </main>
    <ul id="detailClick" class="container">
        <li>상품설명</li>
        <li>상세정보</li>
        <li>후기</li>
        <li>문의</li>
    </ul>
    <div id="introItem" class="container">
        제품 조리 사진
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_2.jpg" alt="${d.name} 제품">
        제품 구성 사진
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_3.jpg" alt="${d.name} 구성품">
        제품 표시사항 및 크기
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_4.jpg" alt="${d.name} 상세표기">
    </div>

</body>
</html>