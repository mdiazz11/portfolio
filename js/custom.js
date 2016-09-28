//Transparent navbar

/*var transparent = true;

$(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
        if (transparent) {
            transparent = false;
            $('.navbar-fixed-top').removeClass('navbar-transparent');
        }
    } else {
        if (!transparent) {
            transparent = true;
            $('.navbar-fixed-top').addClass('navbar-transparent');
        }
    }
});

Equivilant to below!
*/
/*
$(window).scroll(function () {
    $('.navbar-fixed-top').toggleClass('navbar-transparent', $(document).scrollTop() < 500);
});*/


/*
Determines when:
    -nav should be transparent
    -when back-to-top dive should appear
*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $("#back-to-top").addClass("active");
        $('.navbar-fixed-top').removeClass('navbar-transparent')
    } else {
        $("#back-to-top").removeClass("active");
        $('.navbar-fixed-top').addClass('navbar-transparent');
    }
});


$('body').scrollspy({
    target: '#navbar'
});

/*
//Scrolling animation
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

*/

$('.navbar a, a.back-to-top').click(function () {
    var scrollPos = $('body').find($(this).attr('href')).offset().top;
    $('html,body').animate({
        scrollTop: scrollPos
    }, 500);
    return false;
});


//Blinking Text
$(function () {
    $("#typed-text").typed({
        strings: ["I'm a Web Developer", "I'm a Recent Grad", " I'm Melissa Diaz"],
        typeSpeed: 0
    });
});
