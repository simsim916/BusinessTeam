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
    <!-- 기본 CSS, JS -->
    <link rel="stylesheet" href="/tomatoFarm/resources/css/00default.css">
    <script defer src="/tomatoFarm/resources/js/00default.js"></script>
    <!-- 페이지 CSS, JS -->
    <link rel="stylesheet" href="/tomatoFarm/resources/css/login.css">
    <script defer src="/tomatoFarm/resources/js/login.js"></script>
	<title>토마토팜 || 로그인</title>
</head>
<body>
    <div id="bodyBG"></div>
    <main>
<<<<<<< HEAD
        <img id="logo" src="/tomatoFarm/resources/img/logo.png">
        <form id="loginBox" action="login" method="post">
=======
        <a href="/tomatoFarm/"><img id="logo" src="/tomatoFarm/resources/img/logo.png"></a>
        <form id="loginBox">
>>>>>>> refs/remotes/origin/moon
            <div id="loginButton">
                <div onclick="selectLoginType(this)">일반 로그인</div>
                <div onclick="selectLoginType(this)">사업자 로그인</div>
            </div>

            <div id="idBox">
                <i class="fa-solid fa-user"></i>
                <input onkeydown="changeOpacityId(event)" onblur="checkId(event)" onfocus="focusInputBox(event)" id="id"
                    type="text" name="id" placeholder="아이디">
            </div>
            <div id="passwordBox">
                <i class="fa-solid fa-key"></i>
                <input onkeydown="changeOpacityPw(event)" onblur="checkPassword(event)" onfocus="focusInputBox(event)"
                    id="password" type="password" name="password" placeholder="비밀번호">
            </div>
            <p id="errorBox">
                <span id="idError"></span>
                <span id="pwError"></span>
            </p>

<<<<<<< HEAD
=======
            <button id="loginInBox">로그인</button>
>>>>>>> refs/remotes/origin/moon
        </form>
<<<<<<< HEAD
        <div id="loginInBox">
            <button>로그인</button>
        </div>
=======
>>>>>>> refs/remotes/origin/moon
        <ul id="search">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>회원가입</li>
        </ul>
    </main>
</body>

</html>