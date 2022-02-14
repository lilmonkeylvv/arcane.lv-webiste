$(function() {
    let mq = window.matchMedia("(max-width: 450px)");
    if (mq.matches) {
        $('header').css('height', '144px');
    } else {
        $('header').css('height', '140px');
    }
    $('.top-bar-click').on('click', () => {
        $('header').css('height', '100px', 'padding', '15px 0');
        $('header').css('padding', '15px 0');
        $('.top-bar').slideUp();
    });

    let scrollbar = $('.scrollbar-outer'),
        header = $('header'),
        htmlBody = $('html, body'),
        menuLink = $('nav a'),
        subscribeInput = $('.subscribe-form > input'),
        backToTop = $('.backToTop i');

    // ScrollBar 
    scrollbar.scrollbar();

    // Scroll to section
    menuLink.on('click', function() {
        htmlBody.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        // Do something
        if (scroll > 200) {
            $('header').css('background-color', 'rgba(0,0,0,0.9)');
        } else {
            $('header').css('background-color', 'transparent');
        }
    });

    // Add Box shadow on focus
    subscribeInput.focus(function() {
        $('.subscribe-form').css("box-shadow", "0px 11px 18px rgba(0,0,0,0.15)");
    });

    // Remove Box shadow on focusOut
    subscribeInput.focusout(function() {
        $('.subscribe-form').css("box-shadow", "none");
    });

    // Back to Top
    backToTop.on('click', function() {
        htmlBody.animate({
            scrollTop: $('.video-wrapper').offset().top

        }, 600);
    });
});