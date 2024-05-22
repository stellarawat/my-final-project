$('.dayNight input').change(function () {
  $('body').toggleClass('day', $(this).is(':checked'));
});

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});