/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile menu*/
    $('.fa-navicon').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle('fast');
    });
    $('.story-listing .story--rare').matchHeight();
    $('.story--img-shadow').each(function() {
        var imgshadow = $(this).find('.img-responsive').attr("src");
        $(this).append($('<div class="img-shadow"></div>'));
        $(this).find('.img-shadow').css("background-image", "url(" + imgshadow + ")");
    });
    $(".featured-slider").bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '.ion-android-arrow-forward',
        prevSelector: '.ion-android-arrow-back',
        pager: 0
    });
    $(".quote-listing").bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '',
        prevSelector: ''
    });
});
