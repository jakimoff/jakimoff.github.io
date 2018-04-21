(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();

        //easing effect
        $('.smooth_scroll a').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        $('.owl-carousel').slick({
            dots: false,
            loop: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: '<div class="next"><button type="button">Next ></button></div>',
            prevArrow: '<div class="prev"><button type="button">< Previous</button></div>',
            appendArrows: $('.gallery-controls p'),
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
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

    });
}(jQuery));

$(document).ready(function () {


  var tabs = $("#FLOOR_PLANS .navigation .nav li");
  var floorplans = $("#FLOOR_PLANS .row .container .single_floor");

  $(".left").click(function(e) {

    e.preventDefault();

    // Get Active Tab and Prev
    var currentTab = $("#FLOOR_PLANS .navigation .nav li.active");
    var prevTab = currentTab.prev();

    if (!prevTab.length) {
      prevTab = tabs.last();
    }

    $(prevTab).find('a').trigger('click');

  });

  $(".right").click(function(e) {

    e.preventDefault();

    // Get Active Tab and Prev
    var currentTab = $("#FLOOR_PLANS .navigation .nav li.active");
    var nextTab = currentTab.next();

    if (!nextTab.length) {
      nextTab = tabs.first();
    }

    $(nextTab).find('a').trigger('click');

  });

});