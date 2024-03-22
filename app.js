let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewPortHeight = window.innerHeight;
    let contentHeight = sidebar_content.getBoundingClientRect().height;
    let sideBarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

    if (scrollTop >= contentHeight - viewPortHeight + sideBarTop) {
        sidebar_content.style.transform = `translateY(-${contentHeight - viewPortHeight + sideBarTop}px)`;
        sidebar_content.style.position = "fixed";
        
    }
    else {
        sidebar_content.style.position = "";
        sidebar_content.style.transform = "";
    }
}