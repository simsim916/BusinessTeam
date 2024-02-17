function a(str) {
    console.log(str)
}

function showContent(ele) {

    // const content = '<div id=annContent>클릭한 공지사항의 내용</div>';
    // const ContentDiv = document.createElement('div');
    // ContentDiv.className = 'ContentBox';
    // ContentDiv.innerText = 'agqilwljklajfklldjklzsjdksd'
    // ele.parentNode.after(ContentDiv);
    // 이렇게 하면 된다는데
    // 태그가 추가되는게 아니라 텍스트가 그대로 추가된다.

    a(ele.parentNode.className);
    if (ele.parentNode.previousElementSibling.className == 'annRow') {
        const ContentDiv = document.createElement('div');
        ContentDiv.className = 'contentBox';
        ContentDiv.innerText = "브랜드 '김구원선생'은 2024년 01월 01일 이후로 TomatoFarm 에서 판매를 중단하게 되었습니다. 관련 상품들은 24년 2월까지만 게시할 예정입니다";
        ele.parentNode.after(ContentDiv);
    } else {
        ele.parentNode.nextElementSibling.remove();
    }
}