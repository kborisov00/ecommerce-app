$(document).ready(function () {
    // Slider init
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    // Header's categories menu
    $('.bot__categories').on('click', function () {
        $('.bot__dropdown-menu').toggleClass('active');
    });

    // hide preloader
    $('.preloader').css('opacity', 0).css('visibility', 'hidden');
});