const navToggleBtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');

navToggleBtn.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggleBtn.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    navToggleBtn.setAttribute('aria-expanded', false);
  }
});
