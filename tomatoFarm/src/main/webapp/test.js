/**
** 입력값의 무결성 확인
** member 무결성 확인사항
// ID : 길이(4~10), 영문자,숫자 로만 구성
[w]
// Password : 길이(4~10), 영문,숫자,특수문자로 구성, 특수문자는 반드시 1개 이상 포함할것
// Password2: 재입력후 Password 와 일치성 확인
// Name : 길이(2이상), 영문 또는 한글로 만 입력
// Age: 정수의 범위  ( 숫자이면서, '.'이 없어야함 )  
// BirthDay : 입력 여부 확인  ( length == 10 )
// Point : 실수 ( 구간설정 100 ~ 10000 까지만 가능 )
// Jno : select 를 이용 (X)
// Info : (X)

** 작성 규칙
   => JavaScript function 으로 정의 하고 
      결과를 true or false 로 return
   => 정규식을 활용한다.
   
** match Test
   => 아래 조건에 true -> not (!)  match 적용해보면
   => 정확하지 않으므로 (부적절, replace 를 사용)
        ...       
        } else if (!id.match(/[a-z.0-9]/gi)) {
            alert(' ID는 영문자와 숫자로만 입력하세요. !!!')
            return false;
        }    
 */

"use strict"

// 1) ID
function idCheck() {
    let value = document.getElementById('id').value;
    
    return true;
}
// 2) Password
function pwCheck() {
    let value = document.getElementById('password').value;
    
    return true;
}
// 3) Password
function pw2Check() {
    let value = document.getElementById('password2').value;
    
    return true;
}
// 4) Name
function nmCheck() {
    let value = document.getElementById('name').value;
    
    return true;
}
// 5) Age
function agCheck() {
    let value = document.getElementById('age').value;
    
    return true;
}
// 6) Point
function poCheck() {
    let value = document.getElementById('point').value;
    
    return true;
}
// 7) Birthday
function bdCheck() {
    let value = document.getElementById('birthday').value;
    
    return true;
}