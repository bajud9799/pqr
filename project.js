$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".wrapper").addClass('small-header').removeClass('wrapper');
        }
        else {
            $(".wrapper").removeClass('small-header').addClass('wrapper');
        }
    });
    $("select").dropkick();
    $("#datepicker").datepicker();
    $("#date").datepicker();
    $('#gallery').on('shown.bs.modal', function () {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        })
    });
});