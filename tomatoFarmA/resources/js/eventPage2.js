



function updateTimer2() {
    const targetTime = Date.parse("2024/02/09 23:59:59");
    const now = new Date();
    const remainTime = targetTime - now;

    const days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remainTime / (1000 * 60 * 60));
    const mins = Math.floor(remainTime / (1000 * 60));
    const secs = Math.floor(remainTime / 1000);

    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    const timePlace = document.getElementById('timePlace');
    timePlace.innerHTML = `<div>${d}<span>일</span></div><div>${h}<span>시간</span></div><div>${m}<span>분</span></div><div>${s}<span>초</span></div>`

}
setInterval(updateTimer2, 1000);



