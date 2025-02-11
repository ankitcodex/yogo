(function($) {
    "use strict";
//*** slick slider
 $('.slide-1').slick({
  autoplay: false,
  speed: 800,
  lazyLoad: 'progressive',  
  cssEase:'ease',
});

 $('.slide-2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive:[
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,

      }
    }   
  ]
});
 $('.slide-6').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }   
  ]
});
 })(jQuery);