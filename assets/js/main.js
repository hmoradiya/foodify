(function ($) {

  //loader
  $(".loader-section").addClass("d-flex");
  setTimeout(function () {
    $(".loader-section").removeClass("d-flex");
  }, 1000);

  // search btn

  $(".search_btn").on("click", function (e) {
    e.preventDefault();
    $("#popup-search").toggleClass("show");
  });

  // scroll to top js

  $(".scroll-top").on("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  // scroll button show on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".scroll-top").addClass("show");
    } else {
      $(".scroll-top").removeClass("show");
    }
  });

  // init Isotope elements
  var $box = $(".isotope-box").isotope({
    itemSelector: ".isotope-item",
  });
  // filter functions
  // bind filter button click
  $(".isotope-toolbar").on("click", "button", function () {
    var filterValue = $(this).attr("data-type");
    $(".isotope-toolbar-btn").removeClass("active");
    $(this).addClass("active");
    if (filterValue !== "*") {
      filterValue = '[data-type="' + filterValue + '"]';
    }
    console.log(filterValue);
    $box.isotope({ filter: filterValue });
  });

  
})(jQuery);

