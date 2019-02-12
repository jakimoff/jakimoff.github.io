"use strict";

(function ($) {
  // Svg sprites ready
  $(document).ready(function () {
    svg4everybody({});
  }); // Click's

  $(document).on('click', '.mobile_list__title', function () {
    $(this).parent().toggleClass('active_tabs');
    $(this).parent().next().slideToggle(300);
  }); // Swiper tabs

  var controlActive = $('.tabs_control');
  var swiper = new Swiper('.tabs_slider .swiper-container', {
    speed: 200,
    loop: true,
    effect: 'fade',
    simulateTouch: false
  });
  swiper.on('slideChange', function () {
    var index = swiper.realIndex;
    controlActive.find('.active_tabs').removeClass('active_tabs');
    controlActive.children().eq(index).addClass('active_tabs');
  });
  controlActive.on('click', '.tabs_control__btn', function (e) {
    e.preventDefault();
    swiper.slideTo($(this).index() + 1, 500);
  });
  var swiperReviews = new Swiper('.reviews_wrap .swiper-container', {
    speed: 800,
    loop: true,
    simulateTouch: true,
    effect: 'coverflow',
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 5.8,
      slideShadows: false
    },
    navigation: {
      nextEl: '.reviews_control__next',
      prevEl: '.reviews_control__prev'
    },
    breakpoints: {
      992: {
        slidesPerView: 1
      }
    }
  }); // Offset js menu

  var offsideMenu1 = offside('#nav_mobile', {
    slidingElementsSelector: '.wrapper-fix',
    debug: true,
    buttonsSelector: '#burger',
    slidingSide: 'left',
    beforeOpen: function beforeOpen() {},
    beforeClose: function beforeClose() {}
  });
  $('.site-overlay').on('click', window.offside.factory.closeOpenOffside);
  $(document).on('click', '.blocks__link', function () {
    $(this).parent().toggleClass('block-text--animated');
    $(this).parent().next().toggleClass('block-img--animated');
  });
})(jQuery);