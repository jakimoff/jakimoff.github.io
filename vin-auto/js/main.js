(function($) {
  
  $('.down-arrow').click(function (e) {
    e.preventDefault();
    $('.comments-main').toggleClass('active-reviews');
    $(this).toggleClass('arrow-active');
  });

  function answerClick() {
    $(this).parent().toggleClass('active-faq');
  }
  
  function clickSettings(e) {
    e.preventDefault();
    $(this).next().toggleClass('hidden-soc');
  }
  
  $('.settings-btn').on('click', clickSettings);
  $('.answer-title').on('click', answerClick);
  
  $('.vin-report-title').on('click', function(e) {
    e.preventDefault();
    var currentAttrValue = $(this).attr('href');
    $('.vin-full').find('.report-active').removeClass('report-active');
    $('.vin-report-info').find('.shadow').removeClass('shadow');
    $(this).toggleClass('report-active');
    $(this).parent().parent().toggleClass('shadow');
    $('.vin-bottom-text-wraper' + currentAttrValue).show().siblings().hide();
  });
  
  
})(jQuery);