// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('active');
});

// Close mobile menu when a nav item is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.boxShadow = 'none';
  }

  // Go to top button
  const goToTopBtn = document.querySelector('.go-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      goToTopBtn.classList.add('show');
    } else {
      goToTopBtn.classList.remove('show');
    }
  });

  goToTopBtn.addEventListener('click',
    (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0, behavior: 'smooth'
      });
    });
});