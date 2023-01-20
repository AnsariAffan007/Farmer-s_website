var backToTop = $('#back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        backToTop.addClass('show');
    }
    else {
        backToTop.removeClass('show');
    }
});

var width = $(window).width();

$(window).resize(function() {
    responseScroll();
})

function responseScroll() {
    width = $(window).width();
    if (width < 1080) {
        $(".nav-toggler-btn").css("display", "block");
        $(".toggled-nav").css("height", 0);
        $(".nav-links").css("display", "none");
    }
    else {
        $(".nav-toggler-btn").css("display", "none");
        $(".toggled-nav").height(0);
        $(".nav-links").css("display", "block");
    }
}
responseScroll();

// Dropdown
let dropdownEnabled = false;
$(".drop-link").click(function() {
    if(dropdownEnabled) {
        $(".dropdown-content").css("display", "none");
        dropdownEnabled = false;
    }
    else {
        $(".dropdown-content").css("display", "block");
        dropdownEnabled = true;
    }
})

$(".nav-toggler-btn").click(function () {
    if ($(".toggled-nav").height() === 0) {
        $(".toggled-nav").css("height", "180px");
    }
    else {
        $(".toggled-nav").height(0);
    }
})