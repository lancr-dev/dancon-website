const track = document.querySelector('.portfolio-track');
const slides = document.querySelectorAll('.portfolio-image');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

function getSlidesPerView() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function updateSlider() {
  const slidesPerView = getSlidesPerView();

  const slideWidth =
    slides[0].offsetWidth + parseFloat(getComputedStyle(track).gap);

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const slidesPerView = getSlidesPerView();

  const maxIndex = slides.length - slidesPerView;

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', () => {
  const slidesPerView = getSlidesPerView();

  const maxIndex = slides.length - slidesPerView;

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  updateSlider();
});

updateSlider();
