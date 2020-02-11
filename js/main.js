$(document).ready(function () {
    // top slider init
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        touchThreshold: 10,
    });

    // best seller slider init
    $('.best-seller__slider').slick({
        prevArrow: $('.best-seller__arrows .fa-arrow-circle-left'),
        nextArrow: $('.best-seller__arrows .fa-arrow-circle-right'),
    });

    // Header's categories menu
    $('.bot__categories').on('click', function () {
        $('.bot__dropdown-menu').toggleClass('active');
    });

    // hide preloader
    $('.preloader').css('opacity', 0).css('visibility', 'hidden');
});