$(document).ready(function () {

    // When the page is scrolled 50px or more from the top of the page, fade the 'back to top' button in
    // When the page is scrolled to within 50px to the top of the page, fade the 'back to top' button out
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // When the 'back to top' button is clicked, scroll to the top of the page
    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    // When the user scrolls down, slide the navbar out of view
    // When the user scrolls up, slide the navbar into view
    var lastPos = 0;
    $(window).scroll(function (event) {
        var currentPos = $(this).scrollTop();
        if (currentPos > lastPos) {
            $('#navbar').slideUp();
        }
        else {
            $('#navbar').slideDown();
        }
        lastPos = currentPos;
    });

});