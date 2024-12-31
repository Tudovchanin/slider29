const $allSlideItem = document.querySelectorAll('.slider__item');
const $btnPrev = document.querySelector('.page__btn--prev');
const $btnNext = document.querySelector('.page__btn--next');
const $allSlideBg = document.querySelectorAll('.slider__bg');
const $user = document.querySelector('.page__user');
const arrImg = ['./images/11.jpg', './images/22.jpg', './images/33.jpg', './images/44.jpg', './images/55.jpg', './images/66.jpg', './images/77.jpg','./images/88.jpg', './images/99.jpg', './images/10.jpg' ];
let activeSlide = 0;
const $door = document.querySelector('.start-page__door-link');


window.addEventListener('load', () => {

  if ($allSlideItem[0]) {
    const playMusic = localStorage.getItem('playMusic');

    if (playMusic === 'true') {
      const music = new Audio('./Jan Hammer - Crockett\'s Theme.mp3');
      music.play();
      localStorage.removeItem('playMusic');
    }

    $allSlideItem[activeSlide].classList.add('active-slide');

    updateBackgroundImage(arrImg[activeSlide]);
  }
});



if ($door) {
  const soundDoor = new Audio('./skrip-dvernoy-ruchki.mp3');
  const url = $door.href;
  $door.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    soundDoor.play();
    localStorage.setItem('playMusic', 'true');
    setTimeout(() => {
      window.location.href = url;
    }, 900);
  });
}



if ($btnNext && $btnPrev) {

  $btnNext.addEventListener('click', () => {

    $allSlideItem[activeSlide].classList.remove('active-slide');

    activeSlide = (activeSlide + 1) % $allSlideItem.length;

    $allSlideItem[activeSlide].classList.add('active-slide');

    updateBackgroundImage(arrImg[activeSlide]);

    if ($allSlideItem.length - 1 === activeSlide) {
      $user.classList.add('bounceOut');
    } else {
      $user.classList.remove('bounceOut')
    }
  });

  $btnPrev.addEventListener('click', () => {

    $allSlideItem[activeSlide].classList.remove('active-slide');

    activeSlide = !activeSlide ? $allSlideItem.length - 1 : activeSlide - 1;

    $allSlideItem[activeSlide].classList.add('active-slide');

    updateBackgroundImage(arrImg[activeSlide]);
    $user.classList.remove('bounceOut');
  });
}



function updateBackgroundImage(imageUrl) {

  document.documentElement.style.setProperty('--bg-image', `url(${imageUrl})`);
}

