window.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const navigationLinks = document.querySelectorAll(
    '.header-navigation_list-link'
  );
  const navigationItems = document.querySelectorAll('.js-list-item');

  for (let i = 0; i < navigationLinks.length; i++) {
    const link = navigationLinks[i];

    if (link.getAttribute('href') === '') {
      link.classList.add('active-link');
      link.parentNode.classList.add('active-item');
      link.addEventListener('click', function (event) {
        event.preventDefault();
      });
    } else {
      link.classList.remove('active-link');
      link.parentNode.classList.remove('active-item');
    }
  }
});
