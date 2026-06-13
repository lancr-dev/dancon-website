function openSideBar() {
  document.querySelector('.side-bar').classList.add('active');
}

function closeSideBar() {
  document.querySelector('.side-bar').classList.remove('active');
}

const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const decorationTop = document.querySelector('.decoration-top');
const servicesSection = document.querySelector('.services');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      servicesSection.classList.toggle('show-decoration', entry.isIntersecting);
    });
  },
  {
    rootMargin: '0px 0px -100px 0px',
  },
);

observer.observe(document.querySelector('.decoration-top'));

const counters = document.querySelectorAll('.counter');
const aboutSection = document.querySelector('.about');

let hasAnimated = false;

function animateCounter(counter) {
  const target = Number(counter.dataset.target);

  let current = 0;
  const increment = target / 100;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        counters.forEach(animateCounter);
        hasAnimated = true;
      }

      if (!entry.isIntersecting) {
        hasAnimated = false;

        counters.forEach((counter) => {
          counter.textContent = '0';
        });
      }
    });
  },
  {
    threshold: 0.4,
  },
);

statsObserver.observe(aboutSection);

const equipmentSection = document.querySelector('.equipment');

const equipmentItems = document.querySelectorAll('.equipment .animate-item');

const equipmentObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        equipmentItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('show');
          }, index * 200);
        });
      } else {
        equipmentItems.forEach((item) => {
          item.classList.remove('show');
        });
      }
    });
  },
  {
    threshold: 0.25,
  },
);

equipmentObserver.observe(equipmentSection);
