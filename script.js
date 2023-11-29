let form = document.querySelector('.sign-up-Form');
let password = document.querySelector('#password');
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

function togglePasswordVisibility() {
    password.type = password.type === 'password' ? 'text' : 'password';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let passwordValue = password.value;
    let result = passwordValue.match(passwordPattern);
    
    if (result) {
        alert("Your password is strong");
    } else {
        alert("Weak password. Please include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }
});
