$(document).ready(function () {
const hero = document.querySelector(".hero");
const header = document.querySelector(".main-header");
const menu = document.querySelector(".menu-items");
const title = document.querySelector(".title");
const title_wrap = document.querySelector(".title-wrap");
const logo = document.querySelector('.logo');
// const hero = document.querySelector('.hero');

const tl = new TimelineMax();

 tl.fromTo(menu, 2.5, {y: "-100%"}, {y: '0%'}
 ).fromTo(title, 2.5, {top: "45%"}, {top: '50%'}, "-=2.5"
 ).fromTo(title_wrap, 2.5, {top: "58%"}, {top: '62.5%'}, "-=2.5"
 ).fromTo(logo, 2.5, {y: "-100%"}, {y: '0%'}, "-=2.5"
 );


});
