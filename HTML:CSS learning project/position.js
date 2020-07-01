$(document).ready(function () {
  $.fn.followTo = function (pos) {
    var $this = this,
      $window = $(window);

    $window.scroll(function (e) {
      $window.scrollTop() > pos
        ? $this.css({
            position: "absolute",
            top: pos,
          })
        : $this.css({
            position: "fixed",
            top: 0,
          });
    }).on("resize", function(){ // If the user resizes the window
        pos = $(this).height() - 60;
    });
        
  };
  var $win = $(window);
  var winH = $win.height();
  $("#block-menu").followTo(winH - 60);
});
