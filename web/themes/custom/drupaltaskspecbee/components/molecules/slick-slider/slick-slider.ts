(($) => {
  $(function ($) {
    $('.slider-container-custom').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      // nextArrow: '.s-next',
      // prevArrow: '.s-previous',
      mobileFirst: true,
      // dots: true,
      //   responsive: [
      //     {
      //       breakpoint: 767,
      //       settings: 'unslick',
      //     },
      //   ],
    });
  });
  //TODO Improve Performance
  // $(window).on('resize', function () {
  //   $('.slider-container-custom').slick('resize');
  // });
})(jQuery);
