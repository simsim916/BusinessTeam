function openSideBar() {
    if (!sideBarStatus) {
        sideBar.style.transform = "translateX(-100%)";
        topBar.style.paddingLeft = "15px"
        sideBarButton.children[0].style.transform = 'rotateY(0deg)'
        sideBarButton.children[0].style.left = '1px'
        for (div of containers) {
            div.style.transform = "translateX(-40px)"
        }
    } else {
        sideBar.style.transform = "translateX(0)";
        topBar.style.paddingLeft = "95px"
        sideBarButton.children[0].style.left = '3px'
        sideBarButton.children[0].style.transform = 'rotateY(180deg)'
        for (div of containers) {
            div.style.transform = "translateX(0)"
        }
    }
    sideBarStatus = !sideBarStatus;
}

function openDetailFirst() {
    sideBarDetailFirst.style.display = "block"
    sideBarDetailSecond.style.display = "block"
    sideBarDetailFirst.style.transform = "translateX(0)";
}

function closeDetail() {
    sideBarDetailFirst.style.display = "none"
    sideBarDetailSecond.style.display = "none"
    sideBarDetailFirst.style.transform = "translateX(0)";
};