function openSideBar() {
  const sideBar = document.querySelector('.side-bar');
  sideBar.style.display = 'flex';
}

function closeSideBar() {
  const sideBar = document.querySelector('.side-bar');
  sideBar.style.display = 'none';
}

const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
