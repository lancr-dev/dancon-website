document.querySelectorAll('.portfolio').forEach((portfolio) => {
  const track = portfolio.querySelector('.portfolio-track');
  const slides = portfolio.querySelectorAll('.portfolio-image');
  const nextBtn = portfolio.querySelector('.next-btn');
  const prevBtn = portfolio.querySelector('.prev-btn');

  let currentIndex = 0;

  function getSlidesPerView() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateButtons() {
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);

    const hasOverflow = slides.length > slidesPerView;

    prevBtn.style.display = hasOverflow ? 'block' : 'none';
    nextBtn.style.display = hasOverflow ? 'block' : 'none';

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  function updateSlider() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const slideWidth = slides[0].offsetWidth + gap;

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    updateButtons();
  }

  nextBtn.addEventListener('click', () => {
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);

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
    const maxIndex = Math.max(0, slides.length - slidesPerView);

    currentIndex = Math.min(currentIndex, maxIndex);

    updateSlider();
  });

  updateSlider();
});
