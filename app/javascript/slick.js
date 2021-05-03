$(document).on('turbolinks:load', function() {
  $(function() {
    $('.swiper-wrapper').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 20000,
      cssEase: "linear",
      slidesToShow: 1,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      variableWidth: true,
    });
  });
});

