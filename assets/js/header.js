(function ($) {
  $(".main-menu ul li.menu-item-has-children > a").on("click", function (e) {
    e.preventDefault();
    $(this).siblings("ul").slideToggle();
  });
  
  $(".menu_btn").on("click", function (e) {
    e.preventDefault();
    $(".main-menu").slideToggle();
    $(".main-menu").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
    $(".overlay-header").toggleClass("d-block");
  });

  $(window).resize(function () {
    if ($(window).width() >= 991.98) {
      $(".main-menu").css("display", "block");
    } else {
      $(".main-menu").css("display", "none");
    }
  });
  

  // top-header hide on scroll
  $(window).on('scroll',function () {
    if ($(window).scrollTop() > 100) {
      $("#top-header").addClass("hide-top-header");
      $("body").addClass("body-wrapper");
      $(".logo").addClass("logo-minimize");
    } else {
      $("#top-header").removeClass("hide-top-header");
      $("body").removeClass("body-wrapper");
      $(".logo").removeClass("logo-minimize");
    }
  });

  // active header 
  $("ul.sub-menu li a.active").parent("li").parent(".sub-menu").parent("li").addClass("active");
  $("ul.sub-menu").hover(
    function () {
      $(this).parent("li").addClass("active");
    },
    function () {
      $(this).parent("li").removeClass("active");
      $("ul.sub-menu li a.active")
        .parent("li")
        .parent(".sub-menu")
        .parent("li")
        .addClass("active");
    }
  );


})(jQuery);
