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

const servicesSection = document.querySelector('.services');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        servicesSection.classList.add('show-decoration');
      } else {
        servicesSection.classList.remove('show-decoration');
      }
    });
  },
  {
    threshold: 0.25,
  },
);

observer.observe(servicesSection);

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
