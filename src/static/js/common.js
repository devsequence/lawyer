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
    nextArrow: $('.reviews-next')
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
    nextArrow: $('.license-next')
});
$('.partner-slider__inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.partner-prev'),
    nextArrow: $('.partner-next')
});
// $(document).mouseup(function (e){
//     var div = $('.header-phone');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $('.header-phone ul').removeClass('is-open');
//     }
// });
$('.header-nav a').on('click', function (e) {
    e.preventDefault();
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