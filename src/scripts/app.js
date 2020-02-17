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
        } else {
            $('#navbar').slideDown();
        }
        lastPos = currentPos;
    });

    // If the cookie banner has not been seen, display the banner
    if (localStorage.getItem('cookieSeen') != 'shown') {
        $(".cookie-banner").delay(2000).fadeIn();
        localStorage.setItem('cookieSeen', 'shown')
    }

    // Close the cookie banner by clicking the button
    $('#close').click(function (e) {
        $('.cookie-banner').fadeOut();
    });

    $('#form').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3,
                maxlength: 30,
                pattern: "^[a-zA-Z_]*$"
            },
            lastName: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            emailAddress: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 11
            },
            tourType: {
                required: true
            },
            peopleNum: {
                required: true
            },
            pickupAddress: {
                required: true
            },
            tourDate: {
                required: true
            },
            startTime: {
                required: true
            }
        },
        messages: {
            firstname: {
                pattern: "Enter a valid name"
            }
        }
    });

});