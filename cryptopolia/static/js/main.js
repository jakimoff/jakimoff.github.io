(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  var tab = $('.info_link');
  tab.each(function () {
    var $active;
    if (location.hash) {
      $active = $(this).find('[href="' + location.hash + '"]').parent();
    }
    if (!location.hash || !$active.length) {
      $active = $(this).children('li:last');
    }
    $active.each(function () {
      $($(this).children('a').attr('href')).hide();
    });
  });

  var items = $('.info_link a');
  items.on('click', function (e) {
    e.preventDefault();
    $($(this).attr('href')).show();
    $($(this).parent().addClass('active').siblings('.active').removeClass('active').children('a').attr('href')).hide();

  });

})(jQuery);

