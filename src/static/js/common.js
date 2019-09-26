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
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.header-mobile__hidden').slideToggle();
        $('body').toggleClass('hidden');
    });

    // custom select *
    $('.select-custom select').selectmenu();

    // car model slider *
    var modelSlider = $(".model-slider");
    modelSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            375: {
                items: 2
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1280: {
                items: 7
            },
            1400: {
                items: 9
            }
        }
    });

    // advantage slider *
    var advSlider = $(".advantages-slider");
    advSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // photo slider *
    var photoSlider = $(".photo-slider");
    photoSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 24,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // map Yandex *
    ymaps.ready(init);

    function init() {
        var center = [55.753220, 37.715471];
        var myMap = new ymaps.Map('map', {
            center: center,
            controls: [],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'

        });

        if (window.matchMedia('(min-width: 768px)').matches) {
            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small"
                }
            });
            myMap.controls.add(zoomControl, {
                position: {
                    right: '40px',
                    top: '180px'
                }
            });
        }

        myMap.behaviors.disable('scrollZoom');
    }









});
