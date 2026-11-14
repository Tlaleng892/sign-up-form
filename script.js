const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm-password');
const error = document.getElementById('password-error');

function checkPasswords() {
  if (confirm.value !== '' && password.value !== confirm.value) {
    error.classList.add('show');
    confirm.style.border = '1px solid red';
    password.style.border = '1px solid red';
  } else {
    error.classList.remove('show');
    confirm.style.border = '1px solid #E5E7EB';
    password.style.border = '1px solid #E5E7EB';
  }
}

password.addEventListener('input', checkPasswords);
confirm.addEventListener('input', checkPasswords);

form.addEventListener('submit', (e) => {
  if (password.value !== confirm.value) {
    e.preventDefault();
    checkPasswords();
    alert('Passwords do not match! Try again.');
  } else {
    e.preventDefault();
    alert('Account created! Welcome to Odin! 🎉');
    form.reset();
  }
});
