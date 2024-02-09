$(document).ready(function () {
  $(".hero-slider")
    .slick({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            dots: false,
          },
        },
      ],
    })
    .slickAnimation();

  $(".our-menu-slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });

  $(".feedback-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    arrows: true,
    nextArrow: $(".nextFeedback"),
    prevArrow: $(".previousFeedback"),
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".blog-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    nextArrow: $(".nextBlog"),
    prevArrow: $(".previousBlog"),
    arrows: true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-menu-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: ".menu-thumb-list",
  });
  $(".menu-thumb-list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    asNavFor: ".slider-menu-img",
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });

   $(".blog-item-slider").slick({
     dots: false,
     infinite: true,
     speed: 1000,
     fade: true,
     autoplay: true,
     autoplaySpeed: 1000,
     slidesToShow: 1,
     arrows: true,
     prevArrow:
       '<button class="slick-arrow slick-prev previousFeedback"><i class="fa-solid fa-arrow-left"></i></button>',
     nextArrow:
       '<button class="slick-arrow slick-next previousFeedback"><i class="fa-solid fa-arrow-right"></i></button>',
   });
});
