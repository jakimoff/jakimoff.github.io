"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
    setTimeout(function () {
      $('body').css({
        opacity: 1,
        transition: 'all .5s ease-in-out'
      });
    }, 300);
  }); // Nav pages global

  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  }); // Swiper
  // Banners sliders

  $('.slider_global .swiper-container').each(function () {
    var $this = $(this);
    var swiper = new Swiper(this, {
      loop: true,
      speed: 800,
      spaceBetween: 0,
      pagination: {
        el: $this.find('.swiper-pagination')[0],
        clickable: true
      },
      nextButton: $this.find('.swiper-button-next')[0],
      prevButton: $this.find('.swiper-button-prev')[0]
    });
  }); // Others small sliders

  $('.slider_sub .swiper-container').each(function () {
    var $this = $(this);
    var swiper = new Swiper(this, {
      loop: true,
      speed: 800,
      spaceBetween: 30,
      pagination: {
        el: $this.find('.swiper-pagination')[0],
        clickable: true
      },
      nextButton: $this.find('.swiper-button-next')[0],
      prevButton: $this.find('.swiper-button-prev')[0]
    });
  });
  var swiper = new Swiper('.article_content__slider .swiper-container', {
    speed: 800,
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  }); // Ellipsis

  var ellipsisUnit = $(document).find('.news_unit .news_unit__title, .event_list .news_unit__title, .video .banner_full__title, .news_index_slider .news_full__title');
  var ellipsisList = $(document).find('.news_list .news_unit__title, .news_unit__article .news_unit__title');
  var ellipsisArticle = $(document).find('.articles__title, .event__title');
  var ellipsisNewsTitle = $(document).find('.news_page .news_page__title');

  function ellipsisUpdate() {
    ellipsisUnit.ellipsis({
      lines: 2,
      responsive: true
    });
    ellipsisArticle.ellipsis({
      lines: 2,
      responsive: true
    });
    ellipsisList.ellipsis({
      lines: 3,
      responsive: true
    });
    ellipsisNewsTitle.ellipsis({
      lines: 1,
      responsive: true
    });
  }

  ellipsisUpdate(); // Initialize Slidebars

  var controller = new slidebars();
  controller.init(); // Toggle Slidebars

  $(document).on('click', '.header_search__btn', function (event) {
    // Stop default action and bubbling
    event.stopPropagation();
    event.preventDefault(); // Toggle the Slidebar

    controller.open('search'); // Check if a Slidebar is active

    if (controller.isActiveSlidebar('search')) {
      $('.button_close_wrap').fadeIn(200);
      $('.wrapper').addClass('before').fadeIn(500);
    }
  });
  $(document).on('click', '.burger', function (event) {
    // Stop default action and bubbling
    event.stopPropagation();
    event.preventDefault(); // Toggle the Slidebar

    controller.open('nav'); // Check if a Slidebar is active

    if (controller.isActiveSlidebar('nav')) {
      $('.button_close_wrap').addClass('button_close_right').fadeIn(200);
      $('.wrapper').addClass('before').fadeIn(500);
    }
  }); // Close anyway

  $(document).on('click', '.wrapper, .button_close_wrap', function () {
    controller.close('search');
    controller.close('nav');
    $('.button_close_wrap').hide().removeClass('button_close_right');
    $('.wrapper').removeClass('before').fadeIn(500);
  }); // Click Enter Btn

  $(window).bind('resize load', function () {
    if ($(window).outerWidth() < 992) {
      $('.header_enter__container').hide();
      $(document).on('click', '.header_enter__btn', function () {
        $('.header_enter__container').stop(true).fadeToggle(200);
      });
    } else {
      $('.header_enter__container').show();
    }
  }); // Click Massage

  $(document).on('click', '.questions', function () {
    $(this).parent().next().slideToggle(100);
  });
  $(document).on('click', '.btn_heart', function () {
    $(this).toggleClass('heart_active');

    if ($(this).prev().attr('checked')) {
      $(this).prev().removeAttr('checked');
    } else {
      $(this).prev().attr('checked', 'checked');
    }
  }); // Add Avatar

  var PhotoSubmission =
  /*#__PURE__*/
  function () {
    function PhotoSubmission() {
      _classCallCheck(this, PhotoSubmission);

      var inputs = document.querySelectorAll('.avatar_add__btn');

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', this.uploadImage);
      }
    }

    _createClass(PhotoSubmission, [{
      key: "uploadImage",
      value: function uploadImage(e) {
        var uploadBtn = e.target.parentNode.previousElementSibling;
        var defaultSVG = e.target.parentNode.previousElementSibling.childNodes[1].childNodes[1];
        var reader = new FileReader();

        reader.onload = function (e) {
          uploadBtn.setAttribute('style', "background-image: url('".concat(e.target.result, "');"));
          defaultSVG.remove();
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    }]);

    return PhotoSubmission;
  }();

  new PhotoSubmission();
})(jQuery);