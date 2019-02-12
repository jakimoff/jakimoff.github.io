"use strict";

(function ($) {
  $(document).ready(function () {
    // Svg sprite ready
    svg4everybody({});
  }); // Aos animated ready

  AOS.init({
    once: true
  }); // Menu clicks

  $(document).on('click', 'button[name="jewerly"]', function (event) {
    event.preventDefault();
    $('button[name="burger"]').removeClass('active_btn');
    $('.menu_wrap').fadeOut(50);
    $(this).toggleClass('active_btn');
    $('.jewerly_menu_wrap').slideToggle(200);
  });
  $(document).on('click', 'button[name="burger"]', function (event) {
    event.preventDefault();
    $('button[name="jewerly"]').removeClass('active_btn');
    $(this).toggleClass('active_btn');
    $('.jewerly_menu_wrap').fadeOut(50);
    $('.menu_wrap').slideToggle(200);
  }); // Slider products

  var swiper = new Swiper('.slider_global_wrap .swiper-container', {
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    loopedSlides: 3,
    navigation: {
      prevEl: ".slider_global__prev",
      nextEl: ".slider_global__next"
    },
    breakpoints: {
      767: {
        spaceBetween: 15
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15
      }
    }
  });
})(jQuery);