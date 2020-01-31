$(document).ready(function () {
    $('.trending-project').owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('select').dropkick();
    $('.feature-destination').owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });
    $('.affordable-project').owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/arrow-toggle.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});