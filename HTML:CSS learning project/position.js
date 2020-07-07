// $(document).ready(function () {
//   $.fn.followTo = function (pos) {
//     var $this = this,
//       $window = $(window);

//     $window
//       .scroll(function (e) {
//         $window.scrollTop() > pos
//           ? $this.css({
//               position: "absolute",
//               top: pos,
//             })
//           : $this.css({
//               position: "fixed",
//               top: 0,
//             });
//       })
//       .on("resize", function () {
//         var headerHeight = $("header").outerHeight();
//         // If the user resizes the window
//         pos = $(this).height() - headerHeight;
//       });
//   };
//   var headerHeight = $("header").outerHeight();
//   var $window = $(window);
//   var windowHeight = $window.height();
//   $("#block-menu").followTo(windowHeight - headerHeight);
// });

// $(document).ready(function () {
//   $(function () {
//     $(window).on("scroll", function () {
//       if ($(window).scrollTop() > 50) {
//         $(".header").addClass("active");
//       } else {
//         //remove the background property so it comes transparent again (defined in your css)
//         $(".header").removeClass("active");
//       }
//     });
//   });
// });

$(document).ready(function () {
  $.fn.followTo = function (pos) {
    var $this = this,
      $window = $(window);

    $window
      .scroll(function (e) {
        $window.scrollTop() > pos
          ? $(".main-header").addClass("active")
          : $(".main-header").removeClass("active");
      })
      .on("resize", function () {
        var headerHeight = $("header").outerHeight();
        // If the user resizes the window
        pos = $(this).height() - headerHeight;
      });
  };
  var headerHeight = $("header").outerHeight();
  var $window = $(window);
  var windowHeight = $window.height();
  $("#block-menu").followTo(windowHeight - headerHeight);
});
