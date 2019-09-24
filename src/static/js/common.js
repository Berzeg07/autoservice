$(document).ready(function() {

    // fixed menu *
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 45) {
                $('.header-mobile__menu').addClass('stickytop');
                $('.header-mobile__hidden').addClass('sticky');
            } else {
                $('.header-mobile__menu').removeClass('stickytop');
                $('.header-mobile__hidden').removeClass('sticky');
            }
        });
    });

    // mobile menu *
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.header-mobile__hidden').slideToggle();
        $('body').toggleClass('hidden');
    });

    // custom select *
    $('.select-custom select').selectmenu();

});
