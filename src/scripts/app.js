$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
            $('#navbar').addClass('navbar-solid');
        } else {
            $('#back-to-top').fadeOut();
            $('#navbar').removeClass('navbar-solid');
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});