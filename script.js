const aboutLink = document.querySelector('a[href="#about"]');
aboutLink.addEventListener('click', () => {
  window.location.href = 'about.html';
});

const servicesLink = document.querySelector('a[href="#services"]');
servicesLink.addEventListener('click', () => {
  window.location.href = 'services.html';
});

const contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener('click', () => {
  window.location.href = 'contact.html';
});
