console.log("register.js is loaded");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Get the form element
    const registerForm = document.getElementById('registerForm');

    // Add event listener for form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submission intercepted");

        // Get form input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

        // Basic validation
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Registration successful!');
        window.location.href = 'home.html'; 
    });
});
