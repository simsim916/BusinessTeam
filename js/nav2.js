function openSideBar() {
    if (!sideBarStatus) {
        sideBar.style.transform = "translateX(-100%)";
        topBar.style.paddingLeft = "15px"
        sideBarButton.children[0].style.transform = 'rotateY(0deg)'
        sideBarButton.children[0].style.left = '1px'
    } else {
        sideBar.style.transform = "translateX(0)";
        topBar.style.paddingLeft = "95px"
        sideBarButton.children[0].style.left = '3px'
        sideBarButton.children[0].style.transform = 'rotateY(180deg)'
    }
    sideBarStatus = !sideBarStatus;
}

function openDetailFirst(){
    sideBarDetailFirst.style.display="block"
    sideBarDetailFirst.style.transform = "translateX(0)";
}