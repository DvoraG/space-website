const navToggleBtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');

// My solution
// navToggleBtn.addEventListener('click', () => {
//   primaryNav.classList.toggle('show-primary-navigation');
//   if (primaryNav.classList.contains('show-primary-navigation')) {
//     navToggleBtn.setAttribute(
//       'style',
//       'background-image: url(./assets/shared/icon-close.svg'
//     );
//   } else {
//     navToggleBtn.setAttribute(
//       'style',
//       'background-image: url(./assets/shared/icon-hamburger.svg'
//     );
//   }
// });
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
