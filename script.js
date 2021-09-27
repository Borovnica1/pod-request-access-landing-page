const emailInput = document.querySelector('#email');
const formEmailError = document.querySelector('.form__email-error');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

emailInput.addEventListener('keyup', (e) => {
  if (validateEmail(email.value)) {
    formEmailError.style.display = 'none';
  } else {
    formEmailError.style.display = 'block';
  }
})