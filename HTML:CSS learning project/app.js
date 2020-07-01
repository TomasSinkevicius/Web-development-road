$(document).ready(function () {
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.main-header');
  const menu = document.querySelector('.menu-items');
  const title = document.querySelector('.title');
  const title_wrap = document.querySelector('.title-wrap');
  const logo = document.querySelector('.logo');
  const row = document.querySelector('.row');
  const col_md_2 = document.querySelector('.col-md-2');
  const col_md_3 = document.querySelector('.col-md-3');

  const controller = new ScrollMagic.Controller();
  const timeLine = new TimelineMax();
  const timeLine1 = new TimelineMax();
  const timeLine2 = new TimelineMax();
  const timeLine3 = new TimelineMax();

  timeLine
    .from(menu, 2.5, { y: '-100%' })
    .from(title, 2.5, { top: '45%' }, '-=2.5')
    .from(title_wrap, 2.5, { top: '65%' }, '-=2.5')
    .from(logo, 2.5, { y: '-100%' }, '-=2.5');

  const rowScene = getScrollMagicScene(row, '.row', 200);

  const containersWithImage = document.querySelectorAll('.js-container-with-image');

  console.log(containersWithImage);

  const imgScene1 = getScrollMagicScene(containersWithImage[0], '.row-2', -150);

  const imgScene2 = getScrollMagicScene(containersWithImage[1], '.col-md-2', -200);

  function getTimelineAnimation(element) {
    const timeline = new TimelineMax();
    return timeline.from(element, 2.5, {
      scaleX: 0,
      opacity: 0,
      ease: Back.easeOut,
    });
  }

  function getScrollMagicScene(element, triggerElement, offset) {
    return new ScrollMagic.Scene({
      triggerElement: triggerElement,
      offset,
      reverse: false,
    })
      .setTween(getTimelineAnimation(element))
      .addIndicators()
      .addTo(controller);
  }
});
