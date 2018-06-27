(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  var aboutClub = $('.aboutClub');
  var body = $('body');
  var burgerFix = $('.index-page .burger_fix');
  var navFixedWrap = $('.nav_fixed_wrap');


  aboutClub.on('mouseenter', function () {
    $(this).children().next().stop(true).slideDown();
    $(this).children('a').addClass('active');
  });

  aboutClub.on('mouseleave', function () {
    $(this).children().next().stop(true).slideUp();
    $(this).children('a').removeClass('active');
  });

  $('.burger').on('click touchstart', function(e) {
    e.preventDefault();
    $('.menu_wrap').addClass('menu_open');
  });

  $('.closed').on('click touchstart', function () {
    $('.menu_wrap').removeClass('menu_open');
    navFixedWrap.removeClass('menu_fix_open');
    navFixedWrap.removeClass('menu_fix_opens');
  });

  aboutClub.on('click touchstart', function (e) {
    e.preventDefault();
  });

  function clickDesctop(e) {
    e.preventDefault();
    var el = $(this);
    el.children('svg:last-child').toggleClass('turn');
    $('.index-page .nav_fixed_wrap').toggleClass('menu_fix_open');
    button();
  }

  function clickMobile(e) {
    e.preventDefault();
    $('.index-page .nav_fixed_wrap').toggleClass('menu_fix_open');
    button();
  }

  function menuAlt() {
    if($(window).scrollTop() >= 710) {
      $('.index-page .fix_btn_desctop').addClass('fix_btn_open');
    } else{
      $('.index-page .fix_btn_desctop').removeClass('fix_btn_open');
      $('.index-page .nav_fixed_wrap').removeClass('menu_fix_open');
    }
  }

  $(window).on('scroll', menuAlt);

  function globalClick(e) {
    e.preventDefault();
    $('.index-all .nav_fixed_wrap').addClass('menu_fix_opens');
    button();
  }

  function globalPrevent(e) {
    e.preventDefault();
  }

  function all_wrapper() {
    if($(window).outerWidth() <= 992) {
      $('.index-all .nav_fixed_wrap').removeClass('menu_fix_open');
      $('.index-all .fix_btn_desctop').on('click touchstart', globalClick);
      burgerFix.on('click touchstart', clickMobile);
      burgerFix.off('click touchstart', clickDesctop);
    } else {
      $('.index-all .fix_btn_desctop').on('click touchstart', globalPrevent);
      $('.index-all .nav_fixed_wrap').addClass('menu_fix_open');
      burgerFix.on('click touchstart', clickDesctop);
      burgerFix.off('click touchstart', clickMobile);
    }
  }

  $(window).on('load resize', all_wrapper);

  // Mask phone

  $('.phone_us').mask('(000) 000-00-00');

  // Smoothy scroll

  function smoozyResize() {
    if ($(window).outerWidth() >= '768') {
      smoothy.init({
        easing: 'easeInOutQuad',
        offset: 110,
        speed: 1800
      });
    } else {
      smoothy.init({
        easing: 'easeInOutQuad',
        offset: 70,
        speed: 2500
      });
    }
  }

  $(window).on('load resize', smoozyResize);

  $('.btn_up a').on('click', function (e) {
    e.preventDefault();
  });

  // lang active

  $('.welcome_lang a, .lang_fix a').on('click touchstart', function (e) {
    e.preventDefault();
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
  });

  // Popup this

  $('.popup_this').on('click touchstart', function (e) {
    e.preventDefault();
    $('.form_popup_wrap').fadeIn(300);
  });
  
  $('.close_popup').on('click touchstart', function () {
    $('.form_popup_wrap').fadeOut(300);
  });

  // Click tabs

  $('#myTab a').on('click touchstart', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // Slider gallery

  var controlActiveProducts = $('.gallery_slider__mini');

  var ProductSlides = new Swiper('.gallery_slider_wrap', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bulvars',
      clickable: true
    }
  });

  ProductSlides.on('slideChange', function () {
    var index = ProductSlides.activeIndex;
    controlActiveProducts.find('.active_mini').removeClass('active_mini');
    controlActiveProducts.children().eq(index).addClass('active_mini');
  });

  controlActiveProducts.on('click touchstart', '.gallery_mini', function () {
    ProductSlides.slideTo($(this).index(), 500);
  });

})(jQuery);

// Google maps API

function initMap() {
  var uluru = {lat: 60.007, lng: 30.293};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  marker.addListener('click touchstart', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
