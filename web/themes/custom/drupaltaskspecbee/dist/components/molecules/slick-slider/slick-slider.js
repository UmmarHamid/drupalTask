"use strict";
(($) => {
    $(function ($) {
        $('.slider-container-c').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            mobileFirst: true,
            dots: false,
            //   responsive: [
            //     {
            //       breakpoint: 767,
            //       settings: 'unslick',
            //     },
            //   ],
        });
    });
    //TODO Improve Performance
    $(window).on('resize', function () {
        $('.slider-container-c').slick('resize');
    });
})(jQuery);

//# sourceMappingURL=../../../maps/molecules/slick-slider/slick-slider.js.map
