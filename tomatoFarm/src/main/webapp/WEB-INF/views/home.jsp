<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>asdasd
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
    <link rel="stylesheet" href="/css/00header.css">
    <link rel="stylesheet" href="/css/home.css">
    <title>Document</title>
</head>

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

    <div id="adImgBox">
        <div id="adImg" class="container">

            <div id="adRightTab">
                <div>프레시지<img src="/img/brand/fresheasy.png"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    <div id="firstContainer" class="container">
        <h3><i class="fa-solid fa-star"></i>&nbsp;&nbsp; 토마토팜 바로가기 &nbsp;&nbsp;<i class="fa-solid fa-star"></i></h3>
        <div id="firstContainerButton">
            <div><img src="/img/index_bestSeller.png" alt="" class="categoryImg"><br>베스트 상품</div>
            <div><img src="/img/index_mealkit.png" alt="" class="categoryImg"><br>밀키트</div>
            <div><img src="/img/index_food.png" alt="" class="categoryImg"><br>신선 재료</div>
            <div><img src="/img/index_menu.png" alt="" class="categoryImg"><br>메뉴 주문</div>
            <div><img src="/img/index_cooking.png" alt="" class="categoryImg"><br>조리 도구</div>
            <div><img src="/img/index_gift.png" alt="" class="categoryImg"><br>이벤트</div>
        </div>
    </div>

    <hr>

    <div id="secondContainer" class="container">
        <h3><i class="fa-solid fa-gift"></i> &nbsp;&nbsp;특가 상품&nbsp;&nbsp; <i class="fa-solid fa-gift"></i></h3>
        <div id="secondContainerList">
            <div class="slideBox">
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
                <div class="itemBox">
                    <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                    <div class="itemName">신림동 백순대 볶음</div>
                    <div class="itemInfo">프레시지<br></div>
                    <p class="itemPrice">12,300원</p>
                    <div class="itemOption">무료배송</div>
                </div>
            </div>

            <div id="secondContainerRightBtn"><i class="fa-sharp fa-solid fa-arrow-right"></i></div>

        </div>
    </div>

    <hr>

    <div id="thirdContainer" class="container">
        <h3><i class="fa-solid fa-bag-shopping"></i> &nbsp;&nbsp; 상품 보기 &nbsp;&nbsp; <i
                class="fa-solid fa-bag-shopping"></i></h3>
        <div class="typeBox">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/img/brand/fresheasy.png" alt="category_vitamin">프레시지</div>
                <ul class="typeBoxTagList">
                    <li><span>스테이크</span></li>
                    <li><span>파스타</span></li>
                    <li><span>감바스</span></li>
                </ul>
            </div>
            <div class="typeBoxImg">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        신림동 백순대 볶음
                    </div>
                    <p class="typeBoxImgTitlePrice">12,300원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </div>
            <div class="typeBoxList">
                <div class="slideBox">
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                </div>
                <div id="secondContainerRightBtn"><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
        <div class="typeBox">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/img/brand/rlarndnjstjstodenqn.png" alt="category_vitamin">김구원선생
                </div>
                <ul class="typeBoxTagList">
                    <li><span>영양보충제</span></li>
                    <li><span>특수분유</span></li>
                </ul>
            </div>
            <div class="typeBoxImg">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        신림동 백순대 볶음
                    </div>
                    <p class="typeBoxImgTitlePrice">12,300원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </div>
            <div class="typeBoxList">
                <div class="slideBox">
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                </div>
                <div id="secondContainerRightBtn"><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
        <div class="typeBox">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/img/brand/마이셰프.png" alt="category_vitamin">마이셰프</div>
                <ul class="typeBoxTagList">
                    <li><span>영양보충제</span></li>
                    <li><span>특수분유</span></li>
                </ul>
            </div>
            <div class="typeBoxImg">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        신림동 백순대 볶음
                    </div>
                    <p class="typeBoxImgTitlePrice">12,300원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </div>
            <div class="typeBoxList">
                <div class="slideBox">
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                    <div class="itemBox">
                        <img src="../img/itemImg/5000035_1.jpg" alt="신림동 백순대 볶음">
                        <div class="itemName">신림동 백순대 볶음</div>
                        <div class="itemInfo">프레시지<br></div>
                        <p class="itemPrice">12,300원</p>
                        <div class="itemOption">무료배송</div>
                    </div>
                </div>
                <div id="secondContainerRightBtn"><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </div>

</body>
<script>
    let firstCategory = document.getElementById("firstCategory");
    function firstCategoryVisible() {
        firstCategory.style.display = "block";
    }
    function firstCategoryHidden() {
        firstCategory.style.display = "none";
    }
</script>
</html>
