(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  let lock = $('.lock_img');

  lock.on('click', function () {
    $(this).next().toggleClass('animated tada text_yellow');
    setTimeout(function () {
      lock.next().removeClass('animated tada text_yellow');
    }, 1000);
  });
  
  let text = $('.best-wrap');

  text.on('mouseenter', function () {
    $(this).prev().addClass('icon_yellow');
  });

  text.on('mouseleave', function () {
    $(this).prev().removeClass('icon_yellow');
  });

  let btn = $('.btn_reg, .btn_user');

  btn.on('mouseenter', function () {
    $(this).children().addClass('animated rubberBand');
  });

  btn.on('mouseleave', function () {
    $(this).children().removeClass('animated rubberBand');
  });

})(jQuery);

