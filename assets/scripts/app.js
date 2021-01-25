const form = document.getElementById('login-form');
const userEmail = document.getElementById('email');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const emailLabel = document.getElementById('email__label');
const emailContainer =  document.getElementById('email__container');
const passContainer =  document.getElementById('password__container');
const errorEmailMessage = document.querySelector('.login__error-message--email');
const errorPassMessage = document.querySelector('.login__error-message--password');
const passToggleTrigger = document.getElementById('password-toggle');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let emailSuccesful =  false;
  let passSuccesful =  false;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if(!emailRegex.test(userEmail.value)) {
    emailContainer.classList.add('error');
    errorEmailMessage.innerHTML = 'Dirección de correo electrónico invalida';
  } else {
    emailContainer.classList.remove('error');
    errorEmailMessage.innerHTML = '';
    emailSuccesful = true;
  }
  if(passInput.value.length < 8) {
    passContainer.classList.add('error');
    errorPassMessage.innerHTML = 'Contraseña invalida';
  } else {
    passContainer.classList.remove('error');
    errorPassMessage.innerHTML = '';
    passSuccesful = true;
  }
  if(emailSuccesful && passSuccesful) {
    console.log('Logging in...');
    form.reset();
    inputNoFocus();
  }
})

const inputFocus = () => {
  userEmail.style.margin = '20px 0 5px 0';
  emailLabel.style.top = '5px';
  emailLabel.style.fontSize = '1.2rem';
}
const inputNoFocus = () => {
  if(userEmail.value !== ''){
    userEmail.style.margin = '20px 0 5px 0';
    emailLabel.style.top = '5px';
    emailLabel.style.fontSize = '1.2rem';
  } else {
    userEmail.style.margin = '10px 0 10px 0';
    emailLabel.style.top = '14px';
    emailLabel.style.fontSize = '1.5rem';
  }
}

emailInput.addEventListener('focus', inputFocus);
emailInput.addEventListener('focusout', inputNoFocus);

const passToggle = () => {
  if (passInput.type === "password") {
    passInput.type = "text";
    passToggleTrigger.classList.remove('invisible');
    passToggleTrigger.classList.add('visible');
  } else {
    passInput.type = "password";
    passToggleTrigger.classList.add('invisible');
    passToggleTrigger.classList.remove('visible');
  }
}

passToggleTrigger.addEventListener('click', passToggle);