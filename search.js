$(document).ready(function () {
    $('.owl-lorem').owlCarousel({
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<img class="arrow-left" src="images/angle-left-arrow.svg" >', '<img class="arrow-right" src="images/angle-right-arrow.svg" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    $('select').dropkick();

});
function resetdate() {
    document.getElementById('#startdate1').reset();
}
function resetWeek() {
    document.getElementById("#timeDuration").reset();
}
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 50,
        values: [1, 10],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + "Week" + " - " + ui.values[1] + "Weeks");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "Week" +
        " - " + $("#slider-range").slider("values", 1) + "Weeks");
});
function sliderRange() {
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 50,
        values: [1, 10],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + "Week" + " - " + ui.values[1] + "Weeks");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "Week" +
        " - " + $("#slider-range").slider("values", 1) + "Weeks");
}
