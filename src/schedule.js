console.log("scripts.js is loaded");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Get the form element
    const appointmentForm = document.getElementById('appointment-form');

    // Add event listener for form submission
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submission intercepted");

        // Get form input values
        const patientName = document.getElementById('patient-name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        const appointmentDate = document.getElementById('appointment-date').value;
        const appointmentTime = document.getElementById('appointment-time').value;
        const reason = document.getElementById('reason').value;
        const consultationMode = document.querySelector('input[name="consultation-mode"]:checked').value;
        const insurance = document.getElementById('insurance').value;

        console.log("Patient Name:", patientName);
        console.log("Date of Birth:", dob);
        console.log("Gender:", gender);
        console.log("Phone:", phone);
        console.log("Email:", email);
        console.log("Department:", department);
        console.log("Appointment Date:", appointmentDate);
        console.log("Appointment Time:", appointmentTime);
        console.log("Reason for Visit:", reason);
        console.log("Consultation Mode:", consultationMode);
        console.log("Insurance:", insurance);

        // Basic validation
        if (patientName === '' || dob === '' || gender === '' || phone === '' || email === '' ||
            department === '' || appointmentDate === '' || appointmentTime === '' || reason === '' ||
            consultationMode === '' || insurance === '') {
            alert('Please fill in all fields.');
            return;
        }
        alert('Appointment scheduled successfully!');
        window.location.href = 'home.html';
    });
});