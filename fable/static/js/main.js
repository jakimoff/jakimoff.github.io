"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
    setTimeout(function () {
      $('body').css({
        'opacity': 1,
        'transition': 'all .5s ease-in-out'
      });
    }, 300);
  }); // Phone mask

  $('.phone_mask').mask('+00 (000) 000-00-00'); // Page scroll to id

  $("a[href*='#']").mPageScroll2id({
    autoScrollSpeed: true
  }); // Animation on scroll

  AOS.init({
    once: true
  }); // Click's
  // $(document).on('click', '.active_lang', function (e) {
  //   e.preventDefault();
  //   $('.language_list_wrap').fadeToggle(300);
  // });

  $(document).on('click', '.header_burger__this', function () {
    $('.header_menu').fadeToggle(200);
  });
  $(document).on('click', '.modal_btn__next, .btn_order', function (e) {
    e.preventDefault();
  });
  $(document).on('click', '#video-id', function (e) {
    e.preventDefault();
    var video = $(this).get(0);

    if (video.paused === false) {
      video.pause();
    } else {
      video.play();
    }

    return false;
  });
  $(window).on('resize load', function () {
    if ($(window).outerWidth() < 992) {
      $('.btn_recall').attr('href', 'tel:380686787806');
      $(document).off('click', '.btn_recall');
    } else {
      $('.btn_recall').removeAttr('href', true);
      $(document).on('click', '.btn_recall', function (e) {
        e.preventDefault();
        $('.btn_recall__desktop').fadeToggle(300);
      });
    }
  }); // Tilt js

  var tilt = $('.js-tilt');
  tilt.tilt({
    scale: 1.05
  }); // Swiper sliders

  var swiper = new Swiper('.welcome_wrap .swiper-container, .banners_wrap .swiper-container', {
    speed: 800,
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  var swiperIpad = new Swiper('.slider_ipad .swiper-container', {
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.button_ipad__next, .slider_ipad__catText--link',
      prevEl: '.button_ipad__prev'
    }
  });
  var swiperOrder = new Swiper('.pre_order_wrap .swiper-container', {
    speed: 800,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15
      }
    },
    navigation: {
      nextEl: '.button_ipad__next',
      prevEl: '.button_ipad__prev'
    }
  });

  function sliderPopup() {
    new Swiper('.modal .swiper-container', {
      speed: 800,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 50,
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 15
        }
      },
      navigation: {
        nextEl: '.button_ipad__next',
        prevEl: '.button_ipad__prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  var swiperReviews = new Swiper('.reviews_wrap .swiper-container', {
    speed: 800,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
      delay: 10000
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 100
      }
    },
    navigation: {
      nextEl: '.button_ipad__next',
      prevEl: '.button_ipad__prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  sliderPopup();
  var modal = $('#modal');
  var modal2 = $('#modal2');
  var modal3 = $('#modal3');
  var popupReviews = $('#popup_rew');
  var popupIframe = $("#modal-iframe"); // Modals Ready

  modal.iziModal({
    bodyOverflow: false,
    group: 'form',
    arrowKeys: false,
    onOpened: function onOpened() {
      new Swiper('#modal .swiper-container', {
        speed: 800,
        loop: false,
        slidesPerView: 3,
        init: true,
        spaceBetween: 50,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 15
          }
        },
        navigation: {
          nextEl: '.button_ipad__next',
          prevEl: '.button_ipad__prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  });
  modal2.iziModal({
    bodyOverflow: false,
    group: 'form',
    arrowKeys: false,
    onOpened: function onOpened() {
      new Swiper('#modal2 .swiper-container', {
        speed: 800,
        loop: false,
        slidesPerView: 3,
        init: true,
        spaceBetween: 50,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 15
          }
        },
        navigation: {
          nextEl: '.button_ipad__next',
          prevEl: '.button_ipad__prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  });
  modal3.iziModal({
    bodyOverflow: false,
    group: 'form',
    arrowKeys: false
  });
  popupReviews.iziModal({
    bodyOverflow: false,
    arrowKeys: false
  });
  popupIframe.iziModal({
    title: 'TaleAR - книги з магією доповненої реальності',
    headerColor: '#54c3ee',
    iframe: true,
    iframeHeight: 360,
    iframeURL: "https://player.vimeo.com/video/301568144",
    bodyOverflow: false,
    fullscreen: true
  });
  $(document).on('click', '.questions_list__btn', function (e) {
    e.preventDefault();
    $(this).parent().next().slideToggle(200).toggleClass('active_answer');

    if ($(this).parent().next().hasClass('active_answer')) {
      $(this).text('Приховати відповідь').addClass('active_btn');
      $(this).next().hide();
    } else {
      $(this).next().show();
      $(this).text('Відкрити відповідь').removeClass('active_btn');
    }
  }); // Countdown

  function countdown(endDate) {
    var days, hours, minutes, seconds;
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
      return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      var startDate = new Date();
      startDate = startDate.getTime();
      var timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("days1").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("hours1").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("minutes1").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        document.getElementById("seconds1").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  }

  (function () {
    countdown('01/31/2019 05:00:00 PM');
  })(); // Send Ajax and Validation Form


  $.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  });
  modal.validate({
    rules: {
      'tale[]': {
        required: true,
        minlength: 1
      }
    },
    messages: {
      'tale[]': {
        required: '',
        minlength: ''
      }
    }
  });
  modal2.validate({
    rules: {
      'tale[]': {
        required: true,
        minlength: 1
      }
    },
    messages: {
      'tale[]': {
        required: '',
        minlength: ''
      }
    }
  });
  modal3.validate({
    rules: {
      name: {
        required: true
      },
      myEmail: {
        required: true,
        regex: '^(([^<>()[\\]\\\\.,;:\\s@\\“]+(\\.[^<>()[\\]\\\\.,;:\\s@\\“]+)*)|(\\“.+\\“))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      }
    },
    messages: {
      name: {
        required: 'Будь-ласка введіть Ваше ім’я'
      },
      myEmail: {
        regex: 'Введіть коректний Email',
        required: 'Будь-ласка введіть Ваш Email'
      }
    },
    errorElement: 'b',
    errorPlacement: function errorPlacement(error, element) {
      var placement = $(element).data('error');

      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });
  $(".about_form").validate({
    rules: {
      name: {
        required: true
      },
      myEmail: {
        required: true,
        regex: '^(([^<>()[\\]\\\\.,;:\\s@\\“]+(\\.[^<>()[\\]\\\\.,;:\\s@\\“]+)*)|(\\“.+\\“))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      }
    },
    messages: {
      name: {
        required: 'Будь-ласка введіть Ваше ім’я'
      },
      myEmail: {
        regex: 'Введіть коректний Email',
        required: 'Будь-ласка введіть Ваш Email'
      }
    },
    errorElement: 'b',
    errorPlacement: function errorPlacement(error, element) {
      var placement = $(element).data('error');

      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });
  $(".stock_form").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 19
      }
    },
    messages: {
      name: {
        required: 'Будь-ласка введіть Ваше ім’я'
      },
      phone: {
        minlength: 'Введіть коректний телефон',
        required: 'Будь-ласка введіть Ваш телефон'
      }
    },
    errorElement: 'b',
    errorPlacement: function errorPlacement(error, element) {
      var placement = $(element).data('error');

      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });
  $(".form_low").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 19
      }
    },
    messages: {
      name: {
        required: 'Будь-ласка введіть Ваше ім’я'
      },
      phone: {
        minlength: 'Введіть коректний телефон',
        required: 'Будь-ласка введіть Ваш телефон'
      }
    },
    errorElement: 'b',
    errorPlacement: function errorPlacement(error, element) {
      var placement = $(element).data('error');

      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });
  popupReviews.validate({
    rules: {
      name: {
        required: true
      },
      city: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Будь-ласка введіть Ваше ім’я'
      },
      city: {
        required: 'Будь-ласка введіть Ваше місто'
      }
    },
    errorElement: 'b',
    errorPlacement: function errorPlacement(error, element) {
      var placement = $(element).data('error');

      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });
  var sendAjax = $('#next_step2, #next_step3');
  var sendAjax3 = $('#next_step4');
  var sendOrder = $('.stock_form .btn_order, .about_form__btn');
  var sendRew = $('.rew_btn');
  sendAjax.click(function (e) {
    var curStep = $(this).parents("form"),
        curInputs = curStep.find("input"),
        isValid = true;

    for (var i = 0; i < curInputs.length; i++) {
      if (!$(curInputs[i]).valid()) {
        isValid = false;
      }
    }

    if (isValid) {
      e.preventDefault();
      $(this).attr('data-izimodal-next', '');
      setTimeout(function () {
        $(this).removeAttr('data-izimodal-next');
      }, 100);
    }
  });
  sendAjax3.click(function (e) {
    var curStep = $(this).parents("form"),
        curInputs = curStep.find("input, textarea"),
        isValid = true;

    for (var i = 0; i < curInputs.length; i++) {
      if (!$(curInputs[i]).valid()) {
        isValid = false;
      }
    }

    if (isValid) {
      e.preventDefault();
      var data = $('.modal').serialize();
      $.ajax({
        url: '../../send_mail.php',
        dataType: 'text',
        data: data,
        method: 'POST',
        success: function success(res) {
          if (res == 1) {
            window.location.href = 'index-thanks.html';
          }
        }
      });
    }
  });
  sendOrder.click(function (e) {
    var curStep = $(this).parents("form"),
        curInputs = curStep.find("input, textarea"),
        isValid = true;

    for (var i = 0; i < curInputs.length; i++) {
      if (!$(curInputs[i]).valid()) {
        isValid = false;
      }
    }

    if (isValid) {
      e.preventDefault();
      var data = $(this).closest('form').serialize();
      $.ajax({
        url: '../../send_mail.php',
        dataType: 'text',
        data: data,
        method: 'POST',
        success: function success(res) {
          if (res == 1) {
            curInputs.attr('disabled', true); // $(this).attr('disabled', true).text('Відправлено');
          }
        }
      });
    }
  });
  sendRew.click(function (e) {
    var curStep = $(this).parents("form"),
        curInputs = curStep.find("input, textarea"),
        isValid = true;

    for (var i = 0; i < curInputs.length; i++) {
      if (!$(curInputs[i]).valid()) {
        isValid = false;
      }
    }

    if (isValid) {
      e.preventDefault();
      var data = $(this).closest('form').serialize();
      $.ajax({
        url: '../../send_mail.php',
        dataType: 'text',
        data: data,
        method: 'POST',
        success: function success(res) {
          if (res == 1) {
            popupReviews.iziModal('close', {
              transitionOut: 'bounceOutDown'
            });
          }
        }
      });
    }
  });
})(jQuery);