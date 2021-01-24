const submitBttn = document.getElementById('submit-bttn');
submitBttn.addEventListener('click', (event) => validateInput(event))


const makeErrorMessageVisible = (element, input = '') => {
  element.style.display = 'block';
  input.classList.add('input-error');
}
const makeErrorMessageInvisible = (element, input) => {
  element.style.display = 'none';
  input.classList.remove('input-error');
}

// const validateEmail = (email, element, input) => {
//   if(email ==='') {
//     element.style.display = 'block';
//     input.classList.add('input-error');
//     return
//   }
//   const validation = /@/g
//   const validEmail = validation.exec(email)
//   if(validEmail) {
//     element.style.display = 'none';
//     input.classList.remove('input-error');
//     return
//   } else {
//     element.style.display = 'block';
//     input.classList.add('input-error');
//   }
// }

const validateInput = event => {
  event.preventDefault();
  const logInForm = document.querySelector('.login__form')
  const userEmail = document.getElementById('email');
  const userPassword = document.getElementById('password');
  const errorMessageEmail = document.querySelector('.login__error-message--email');
  const errorMessagePassword = document.querySelector('.login__error-message--password');

  if(userPassword.value == '' && userEmail.value == '') {
    makeErrorMessageVisible(errorMessageEmail, userEmail);
    errorMessageEmail.innerHTML = 'Introduzca una dirección de correo valida';
    makeErrorMessageVisible(errorMessagePassword, userPassword);
    errorMessagePassword.innerHTML = 'Contraseña incorrecta';
  } else if(userPassword.value == '') {
    makeErrorMessageInvisible(errorMessageEmail, userEmail);
    errorMessageEmail.innerHTML = '';
    makeErrorMessageVisible(errorMessagePassword, userPassword);
    errorMessagePassword.innerHTML = 'Contraseña incorrecta';
  } else if(userEmail.value == '') {
    makeErrorMessageVisible(errorMessageEmail, userEmail);
    errorMessageEmail.innerHTML = 'Introduzca una dirección de correo valida';
    makeErrorMessageInvisible(errorMessagePassword, userPassword);
    errorMessagePassword.innerHTML = '';
  } else if(userPassword.value !== '' && userEmail.value !== '') {
    makeErrorMessageInvisible(errorMessagePassword, userPassword);
    makeErrorMessageInvisible(errorMessageEmail, userEmail);
    errorMessageEmail.innerHTML = '';
    errorMessagePassword.innerHTML = '';
    logInForm.reset();
    logIn();
  }

}

const logIn = () => {
  console.log('Logging in...')
}

