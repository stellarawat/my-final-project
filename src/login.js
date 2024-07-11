console.log("login.js is loaded");
let userSelection='';
const body=document.querySelectorAll('body');
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    day.addEventListener('change', () => {
        if (day.checked) {
            body.classList.add('day');
            body.classList.remove('night');
            userSelection = 'dayNight';
            body.style.backgroundColor = 'yellow';
        } else {
            body.classList.add('night');
            body.classList.remove('day');
            userSelection = 'dayNight';
            body.style.backgroundColor = 'blue';
        }
    });
    // Get the form element
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submission intercepted");

        // Get email and password values
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        console.log("Email:", email);
        console.log("Password:", password);

        // Basic validation
        if (email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (email === 'stella@gmail.com' && password === 'password') {
            alert('Login successful!');
            window.location.href = 'home.html'; 
        } else {
            alert('Invalid email or password.');
        }
    });
});