(function ($) {


  // Hamburger

  var burger = $('.hamburger');

  function hamburger() {
    $(this).toggleClass('open');
    $('.header__menu').toggleClass('flex_menu');
  }

  burger.on('click', hamburger);

  // Destroy Hamburger Menu in Resize

  function overlayResize() {
    if ($(window).outerWidth() <= '768') {
      $('.header__menu').removeClass('flex_menu');
      $('.hamburger').removeClass('open')
    }
  }

  $(window).on('load resize', overlayResize);

  // Smoothy scroll

  function smoozyResize() {
    if ($(window).outerWidth() >= '768') {
      smoothy.init({
        easing: 'easeInOutQuad',
        offset: 110,
        speed: 1500
      });
    } else {
      smoothy.init({
        easing: 'easeInOutQuad',
        offset: 70,
        speed: 1500
      });
    }
  }

  $(window).on('load resize', smoozyResize);

})(jQuery);