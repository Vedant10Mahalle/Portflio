// Contact Form Validation (Optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!'); // You can add your email sending logic here
});

// Highlight active section in the navbar
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
    });
});
