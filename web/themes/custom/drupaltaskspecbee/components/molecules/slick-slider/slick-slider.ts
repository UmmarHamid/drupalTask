(($) => {
  $(function ($) {
    $('.slider-container-custom').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      mobileFirst: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    });
  });
})(jQuery);
