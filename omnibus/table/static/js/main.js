(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  $('.lang_dropdown').on('click', function () {
    $('.lang__item').toggleClass('lang_show');
  });

  $('.lang__link').on('click', function () {
    $('.lang__item').removeClass('lang_show active');
    $(this).parent().addClass('active');
  });
  
  $('.person_dropdown').on('click', function () {
    $('.person__item').toggleClass('person_show');
  });

  $('.bit_head button').on('click', function () {
    $(this).children().attr('data-prefix', 'fas').css('color', 'yellow');
  });

  let burger = $('.burger');
  let contentInfo = $('.contents_info');

  burger.on('click', function () {
    contentInfo.toggleClass('contentShow')
  });

  let sort = $('.sort_this .checked_content');

  $('.sort_this span').on('click', function () {
    let that = $(this);
    if(sort.hasClass('checked_content_show')) {
      sort.removeClass('checked_content_show');
    } else {
      that.next().toggleClass('checked_content_show');
    }
  })

  $('.bit-plus').on('click', function (e) {
      e.preventDefault();
      $('.popup').addClass('show');
      $('.overlay').addClass('show_overlay');
      $("body").css("overflow-y","hidden");
  });

  $('.pop_close').on('click', function () {
      $('.popup').removeClass('show');
      $('.overlay').removeClass('show_overlay');
      $("body").css("overflow-y","scroll");
  });

  $('.overlay').on('click', function () {
      $('.popup').removeClass('show');
      $(this).removeClass('show_overlay');
      $("body").css("overflow-y","scroll");
  })

})(jQuery);

