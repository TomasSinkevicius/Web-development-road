$(document).ready(function () {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".main-header");
  const menu = document.querySelector(".menu-items");
  const title = document.querySelector(".title");
  const title_wrap = document.querySelector(".title-wrap");
  const logo = document.querySelector(".logo");
  const row = document.querySelector(".row");
  const col_md_2 = document.querySelector(".col-md-2");
  const col_md_3 = document.querySelector(".col-md-3");
  // const hero = document.querySelector('.hero');

  var controller = new ScrollMagic.Controller();
  const timeLine = new TimelineMax();
  const timeLine1 = new TimelineMax();
  const timeLine2 = new TimelineMax();
  const timeLine3 = new TimelineMax();

  timeLine.from(menu, 2.5, { y: "-100%" })
    .from(title, 2.5, { top: "45%" }, "-=2.5")
    .from(title_wrap, 2.5, { top: "65%" }, "-=2.5")
    .from(logo, 2.5, { y: "-100%" }, "-=2.5");

  timeLine1.from(col_md_2, 2.5, { scaleX: 0, yPercent: 100, ease: Back.easeOut });
  timeLine2.from(col_md_3, 2.5, { scaleX: 0, yPercent: 100, ease: Back.easeOut });
  timeLine3.from(row, 2.5, { scaleX: 0, yPercent: 100, ease: Back.easeOut });


  var scene = new ScrollMagic.Scene({ triggerElement: ".row", reverse: false })
    .setTween(timeLine1)
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({ triggerElement: ".col-md-2", reverse: false })
    .setTween(timeLine2)
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({ triggerElement: ".hero", reverse: false })
    .setTween(timeLine3)
    .addTo(controller);
});
