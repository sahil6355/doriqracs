$(function () {
    $("li").click(function (e) {
        e.preventDefault();
        $("li").removeClass("active");
        $(this).addClass("active");
    });
});

document.querySelector('.fa_bars').addEventListener("click", () => {
    document.querySelector('.side_nav1').classList.toggle('side-nav1');
})


let calcScrollValue = () => {
    let scrollProgess = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHight);
    if (pos > 100) {
        scrollProgess.style.display = "grid";
    }
    else {
        scrollProgess.style.display = "none";
    }
    scrollProgess.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    scrollProgess.style.background = `conic-gradient(#EF1923 ${scrollValue}%, #d7d7d7 ${scrollValue}% )`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



$(document).ready(function () {
    $('.search-icon').click(function () {
        $('.search').slideToggle();
    })
    $('.close').click(function () {
        $('.search').slideToggle();
    })

    $('#hameburger').click(function () {
        $('.main-menu-bar').slideToggle();
    })

    $('.close_second').click(function(){
        $('.main-menu-bar').slideToggle();
    })
})