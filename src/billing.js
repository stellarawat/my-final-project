console.log("billing.js is loaded");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    
    const billingForm = document.getElementById('billingForm');

    // Add event listener for form submission
    billingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submission intercepted");

        // Get form input values
        const patientName = document.getElementById('patient-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        console.log("Patient Name:", patientName);
        console.log("Card Number:", cardNumber);
        console.log("Expiry Date:", expiryDate);
        console.log("CVV:", cvv);

        // Basic validation
        if (patientName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Payment submitted successfully!');
        // Redirect to home page after successful payment
        window.location.href = 'home.html';
    });
});