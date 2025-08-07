"use strict";

var $allSlideItem = document.querySelectorAll('.slider__item');
var $btnPrev = document.querySelector('.page__btn--prev');
var $btnNext = document.querySelector('.page__btn--next');
var $allSlideBg = document.querySelectorAll('.slider__bg');
var $user = document.querySelector('.page__user');
var arrImg = ['./images/11.jpg', './images/22.jpg', './images/33.jpg', './images/44.jpg', './images/55.jpg', './images/66.jpg', './images/77.jpg', './images/88.jpg', './images/99.jpg', './images/10.jpg'];
var activeSlide = 0;
var $door = document.querySelector('.start-page__door-link');
window.addEventListener('load', function () {
  if ($allSlideItem[0]) {
    var playMusic = localStorage.getItem('playMusic');

    if (playMusic === 'true') {
      var music = new Audio('./Jan Hammer - Crockett\'s Theme.mp3');
      music.play();
      localStorage.removeItem('playMusic');
    }

    $allSlideItem[activeSlide].classList.add('active-slide');
    updateBackgroundImage(arrImg[activeSlide]);
  }
});

if ($door) {
  var soundDoor = new Audio('./skrip-dvernoy-ruchki.mp3');
  var url = $door.href;
  $door.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    soundDoor.play();
    localStorage.setItem('playMusic', 'true');
    setTimeout(function () {
      window.location.href = url;
    }, 900);
  });
}

if ($btnNext && $btnPrev) {
  $btnNext.addEventListener('click', function () {
    $allSlideItem[activeSlide].classList.remove('active-slide');
    activeSlide = (activeSlide + 1) % $allSlideItem.length;
    $allSlideItem[activeSlide].classList.add('active-slide');
    updateBackgroundImage(arrImg[activeSlide]);

    if ($allSlideItem.length - 1 === activeSlide) {
      $user.classList.add('bounceOut');
    } else {
      $user.classList.remove('bounceOut');
    }
  });
  $btnPrev.addEventListener('click', function () {
    $allSlideItem[activeSlide].classList.remove('active-slide');
    activeSlide = !activeSlide ? $allSlideItem.length - 1 : activeSlide - 1;
    $allSlideItem[activeSlide].classList.add('active-slide');
    updateBackgroundImage(arrImg[activeSlide]);
    $user.classList.remove('bounceOut');
  });
}

function updateBackgroundImage(imageUrl) {
  document.documentElement.style.setProperty('--bg-image', "url(".concat(imageUrl, ")"));
}