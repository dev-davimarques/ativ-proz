// Alterando o h2
const h2 = document.querySelector('h2');
h2.style.color = 'blue';
h2.style.fontSize = '2.5rem';
console.log(h2);

// Alterando o botão
const btn = document.querySelector('button');
btn.style.background = 'yellow';
// btn.style.fontFamily = 'Courier, monospace';

// Alterando o username
const username = document.querySelector('#login-usuario');
username.classList.add('correct')
console.log(username);

// errorMessage
const errorMessage = document.querySelector('.error-text');
// errorMessage.classList.add('visible');
console.log(errorMessage);

// Alterando o password
const password = document.querySelectorAll('.error-text');
// password[1].classList.add('error');
password[1].classList.add('visible');
console.log(password[1]);

// botando o background color no password
const passwordBackgorund = document.querySelector('#login-senha');
passwordBackgorund.classList.add('error')
console.log(passwordBackgorund);