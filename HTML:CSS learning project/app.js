$(document).ready(function () {
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.main-header');
  const menu = document.querySelector('.menu-items');
  const title = document.querySelector('.title');
  const titleWrap = document.querySelector('.title-wrap');
  const logo = document.querySelector('.logo');
  const row = document.querySelector('.row');
  const about = document.querySelector('.about');

  const controller = new ScrollMagic.Controller();
  const timeLine = new TimelineMax();
  const timeLine1 = new TimelineMax();
  const timeLine2 = new TimelineMax();
  const timeLine3 = new TimelineMax();

  timeLine
    .from(menu, 2.5, { y: '-100%' })
    .from(title, 2.5, { top: '45%' }, '-=2.5')
    .from(titleWrap, 2.5, { top: '65%' }, '-=2.5')
    .from(logo, 2.5, { y: '-100%' }, '-=2.5');

  const rowScene = getScrollMagicScene(row, '.row', -170);

  const containersWithImage = document.querySelectorAll('.js-container-with-image');

  const imgScene1 = getScrollMagicScene(containersWithImage[0], '.row-2', -100);

  const imgScene2 = getScrollMagicScene(containersWithImage[1], '.col-md-3', -250);

  const aboutScene = getScrollMagicScene(about, '.about', -250);

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
      .addTo(controller);
  }
});
