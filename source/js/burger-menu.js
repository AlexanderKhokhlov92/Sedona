const menuBtn = document.querySelector('.header-navigation_burger-menu');
const menuIcon = document.querySelector('.header-navigation_burger-menu-btn');
const listItem = document.querySelectorAll('.js-list-item');

menuBtn.addEventListener('click', (event) => {
  event.preventDefault();

  menuBtn.classList.toggle('active');
  listItem.forEach((item) => {
    item.classList.toggle('open');
  });
});
