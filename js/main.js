$(document).ready(function () {
    // top slider init
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        touchThreshold: 15,
    });

    // best seller slider init
    $('.best-seller__slider').slick({
        prevArrow: $('.best-seller__arrows .fa-arrow-circle-left'),
        nextArrow: $('.best-seller__arrows .fa-arrow-circle-right'),
        slidesToShow: 5,
        touchThreshold: 10,
        responsive: [
            {
              breakpoint: 660,
              settings: {
                arrows: false,
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1110,
                settings: {
                  slidesToShow: 3,
                }
            },
          ]
    });

    $('.best-seller__sliderr').slick({
        prevArrow: $('.best-seller__arrows1 .fa-arrow-circle-left'),
        nextArrow: $('.best-seller__arrows1 .fa-arrow-circle-right'),
        slidesToShow: 5,
        touchThreshold: 10,
        responsive: [
            {
              breakpoint: 660,
              settings: {
                arrows: false,
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1110,
                settings: {
                  slidesToShow: 3,
                }
            },
          ]
    });

    // companies slider init
    $('.companies').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        touchThreshold: 10,
        responsive: [
            {
              breakpoint: 849,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
    });

    // Header's categories menu
    $('.bot__categories').on('click', function () {
        $('.bot__dropdown-menu').toggleClass('active');
    });

    // hide preloader
    $('.preloader').css('opacity', 0).css('visibility', 'hidden');
    $('html').css('overflow-y', 'auto');
});