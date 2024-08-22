// Basic JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Thank you for your message! I will get back to you soon.');
    // Here you could also add code to actually send the form data
});

