import throttle from 'lodash.throttle';

//
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
//

clearForm();
//

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

//
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    alert('Все поля должны быть заполнены!');
  }
  console.log({ Email: email.value, Message: message.value });

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

//
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

//
function clearForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedForm) {
    emailEl.value = savedForm.email;
    textEl.value = savedForm.message;
  }
}
