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
