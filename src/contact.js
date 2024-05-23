document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const formData = new FormData(contactForm);
        
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        
        alert('Your message has been sent! We will get back to you soon.');
        
        contactForm.reset();
        
        window.location.href = 'home.html'; 
    });
});