$(function() {
  var navTop = $('#nav-wrap').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > navTop && $(window).width() > 500) {
      $('#nav-wrap').addClass('sticky');
    } else {
      $('#nav-wrap').removeClass('sticky');
    }
  });
  if ($(window).width() < 500) {
    $('#nav-wrap').addClass('sticky-mobile');
  }
  $(window).on('resize', function() {
    if ($(window).width() < 500) {
      $('#nav-wrap').addClass('sticky-mobile');
    } else {
      $('#nav-wrap').removeClass('sticky-mobile');
    }
  });

  $('.show-mobile').click(function() {
    $('#nav-wrap').toggleClass('hide-mobile');
  });
});