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
            <link rel="stylesheet" href="/tomatoFarm/resources/css/itemList.css">
            <script defer type="text/javascript" src="/tomatoFarm/resources/js/itemList.js"></script>
            <title>토마토팜 || List</title>
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
                            <img src="/tomatoFarm/resources/img/logo.png" alt="">
                            <h1>토마토팜 tomatoFarm</h1>
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
                            <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()"
                                id="firstCategory">
                                <li></li>
                                <li id="firstCategorySearch">
                                    <div>
                                        <input type="text"><i class="fa-solid fa-circle-xmark"></i>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_vitamin.png"
                                        alt="category_vitamin">건강식품</li>
                                <li><img src="/tomatoFarm/resources/img/category_chicken.png" alt="category_chicken">계육
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_etc.png" alt="category_etc">기타</li>
                                <li><img src="/tomatoFarm/resources/img/category_wheat.png" alt="category_wheat">농산가공
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_pig.png" alt="category_pig">돈육</li>
                                <li><img src="/tomatoFarm/resources/img/category_noodle.png" alt="category_noodle">면류
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_flour.png" alt="category_flour">분말류
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_blush.png" alt="category_blush">생활용품
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_detergent.png"
                                        alt="category_detergent">세제류</li>
                                <li><img src="/tomatoFarm/resources/img/category_fish.png" alt="category_fish">수산가공</li>
                                <li><img src="/tomatoFarm/resources/img/category_vegetable.png"
                                        alt="category_vegetable">야채</li>
                                <li><img src="/tomatoFarm/resources/img/category_wheat.png" alt="category_wheat">양곡</li>
                                <li><img src="/tomatoFarm/resources/img/category_sheep.png" alt="category_sheep">양육</li>
                                <li><img src="/tomatoFarm/resources/img/category_seashel.png" alt="category_seashel">어패류
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_cow.png" alt="category_cow">우육</li>
                                <li><img src="/tomatoFarm/resources/img/category_cheese.png" alt="category_cheese">유제품
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_oils.png" alt="category_oils">유지류</li>
                                <li><img src="/tomatoFarm/resources/img/category_drink.png" alt="category_drink">음료ㆍ차
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_gimbap.png" alt="category_gimbap">일반가공
                                </li>
                                <li><img src="/tomatoFarm/resources/img/category_bread.png" alt="category_bread">제과</li>
                                <li><img src="/tomatoFarm/resources/img/category_cookedFood.png"
                                        alt="category_cookedFood">조리식품</li>
                                <li><img src="/tomatoFarm/resources/img/category_seasoning.png"
                                        alt="category_seasoning">조미식품</li>
                                <li><img src="/tomatoFarm/resources/img/category_fruit.png" alt="category_fruit">청과</li>
                                <li><img src="/tomatoFarm/resources/img/category_meat.png" alt="category_meat">축산가공</li>
                                <li><img src="/tomatoFarm/resources/img/category_seaweed.png" alt="category_seaweed">해조류
                                </li>
                            </ul>
                            <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()"
                                id="secondCategory">
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
                            <li><a href="item/list">밀키트 주문</a></li>
                            <li>식단 주문</li>
                            <li>재료 주문</li>
                            <li>이벤트</li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div id="searchTitle" class="container">"<b>${requestScope.keyword}</b>"<span>에 대한 검색 결과</span></div>
            <!-- <h2>신상품</h2>
    <aside>카테고리</aside> -->
            <main class="container">
                <div id="listfilter">
            <ul>
                <li>
                    <i class="fa-regular fa-circle-check"></i>밀키트
                    <ul>
                    	<c:forEach var="l" items="${requestScope.brandList}">
	                        <li><i class="fa-regular fa-circle-check"></i>${l.brand}</li>
                    	</c:forEach>
                    </ul>
                    <hr>
                </li>
                <li>
                    <i class="fa-regular fa-circle-check"></i>식재료
                    <ul>
                    	<c:forEach var="l" items="${requestScope.sortbList}">
                        	<li><i class="fa-regular fa-circle-check"></i>${l.sortb}
                        	<c:forEach var="m" items="${requestScope.sortList}">
                                <ul>
                                <c:if test="${l.sortb==m.sortb}">
	                                <li><i class="fa-regular fa-circle-check"></i>${m.sortc}</li>
                                </c:if>
                                </ul>
                        	</c:forEach>
                    	</c:forEach>
                    </ul>
                <hr>
                </li>
                
                <li>
                    <i class="fa-regular fa-circle-check"></i>행사
                    <ul>
                        <li><i class="fa-regular fa-circle-check"></i>채선당</li>
                        <li><i class="fa-regular fa-circle-check"></i>도리깨침</li>
                    </ul>
                    <hr>
                </li>
                <li id="filterPrice"><i class="fa-regular fa-circle-check"></i>가격
                    <div>
                        <input type="text" placeholder="0 원">
                        &nbsp;&nbsp;~&nbsp;&nbsp;
                        <input type="text" placeholder="1000000 원">
                    </div>
                </li>
            </ul>
        </div>
                <div id="container">
                    <div id="containerOption">
                        <div id="total">총 <span>${requestScope.size}</span> 개</div>
                        <div id="listOption">
                            <div>최신상품순</div>
                            <div>인기상품순</div>
                            <div>가격낮은순</div>
                            <div>가격높은순</div>
                        </div>
                    </div>

                    <c:forEach items="${requestScope.list}" var="l" end="11">
                        <div class="itemBox">
                            <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                            <div class="itemName">${l.name}</div>
                            <div class="itemInfo">${l.brand}<br></div>
                            <p class="itemPrice">${l.price}원</p>
                            <div class="itemOption">${l.delivery==0?"무료배송":l.delivery+=' 원'}</div>
                        </div>
                    </c:forEach>


                </div>
            </main>
        </body>
        <script>
            let firstCategory = document.getElementById("firstCategory");
            function firstCategoryVisible() {
                firstCategory.style.visibility = "visible";
            }
            function firstCategoryHidden() {
                firstCategory.style.visibility = "hidden";
            }
        </script>

        </html>