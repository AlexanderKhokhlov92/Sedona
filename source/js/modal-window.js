const submitButton = document.querySelector('.form_submit-button');
const modalError = document.querySelector('.modal-window-error');
const form = document.querySelector('.form_form');
const page = document.querySelectorAll('.for-modal-window');
const buttonOk = document.querySelector('.modal-window-error_button');
const submitWindow = document.querySelector('.modal-window-submited');

submitButton.addEventListener('click', (event) => {
  if (form.checkValidity() == false) {
    event.preventDefault();

    modalError.classList.add('open');
    page.forEach((element) => {
      element.classList.add('page-blur');
    });
  }
});

console.log(form.checkValidity());

buttonOk.addEventListener('click', (e) => {
  modalError.classList.remove('open');
  page.forEach((element) => {
    e.preventDefault();
    element.classList.remove('page-blur');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalError.classList.remove('open');
    page.forEach((element) => {
      element.classList.remove('page-blur');
    });
  }
});
