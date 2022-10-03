// AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$('.play-button').on('click', function (e) {
    var $this = $(this);
    $('.step-media__video').find('video').attr('controls', true);
    $this.next().attr('controls', true).trigger('play');
    $this.addClass('hidden');
});
$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews-prev'),
    nextArrow: $('.reviews-next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.question-item__title').on('click', function (e) {
    var $this = $(this);
    $this.next().toggleClass('active');
    $this.parent().toggleClass('active');
});
$('.license-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.license-prev'),
    nextArrow: $('.license-next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.partner-slider__inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.partner-prev'),
    nextArrow: $('.partner-next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$(document).mouseup(function (e){
    var div = $('.header-phone, .header-nav');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('body').removeClass('scroll');
        $('.header, .header-btn').removeClass('active');
    }
});
$('.header-nav a').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('scroll');
    $('.header, .header-btn').removeClass('active');
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top - 100
    }, 1000);
});
$('.footer-nav a').on('click', function (e) {
    e.preventDefault();
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top
    }, 1000);
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $ths = $(this);
    $ths.toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
