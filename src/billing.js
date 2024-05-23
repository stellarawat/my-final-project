document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const cardNumber = document.getElementById('card-number');
    const expiryDate = document.getElementById('expiry-date');
    const cvv = document.getElementById('cvv');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateCardNumber(cardNumber.value) && validateExpiryDate(expiryDate.value) && validateCVV(cvv.value)) {
            alert('Payment submitted successfully!');
            form.submit();
        }
    });

    function validateCardNumber(number) {
        const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
        if (!regex.test(number)) {
            alert('Invalid card number format. Please use "1234 5678 9123 4567" format.');
            return false;
        }
        return true;
    }

    function validateExpiryDate(date) {
        const regex = /^\d{2}\/\d{2}$/;
        if (!regex.test(date)) {
            alert('Invalid expiry date format. Please use "MM/YY" format.');
            return false;
        }
        return true;
    }

    function validateCVV(cvv) {
        const regex = /^\d{3}$/;
        if (!regex.test(cvv)) {
            alert('Invalid CVV format. Please use a 3-digit number.');
            return false;
        }
        return true;
    }
});
