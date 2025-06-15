// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Form Validation
    function validateForm() {
        const name = document.getElementById('name')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        // Check if any field is empty
        if (!name || !phone || !email || !message) {
            alert('Tafadhali jaza sehemu zote.');
            return false;
        }

        // Validate phone number (must start with 0 and be 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            alert('Namba ya simu lazima iwe na tarakimu 10.');
            return false;
        }

        // Validate email (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            alert('Barua pepe si sahihi.');
            return false;
        }

        alert('Ujumbe umetumwa kwa mafanikio!');
        return true;
    }

    // Attach validateForm to form submission if form exists
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            if (validateForm()) {
                alert('Fomu yako imesikilizwa! Acheni mawasiliano zaidi.');
                // Optionally reset form or redirect
                joinForm.reset();
            }
        });
    }

    // Feature 2: Dynamic Show/Hide Section
    function toggleSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
        }
    }

    // Feature 3: Interactive Hover Effect for Payment Cards
    const cards = document.querySelectorAll('.payment-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = '0.3s ease';
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Feature 4: Real-Time Password Strength Checker
    function checkPasswordStrength() {
        const password = document.getElementById('password')?.value;
        const strength = document.getElementById('strength');
        if (!password || !strength) return;

        if (password.length < 6) {
            strength.textContent = 'Dhafi';
            strength.style.color = 'red';
        } else if (password.length < 10) {
            strength.textContent = 'Wastani';
            strength.style.color = 'orange';
        } else {
            strength.textContent = 'Imara';
            strength.style.color = 'green';
        }
    }

    // Attach password strength checker to input event
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }

    // Feature 5: Mobile Menu Toggle
    function toggleMenu() {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.classList.toggle('active');
        }
    }

    // Attach toggleMenu to a button if it exists (e.g., .menu-toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Feature 6: Enable Date Picker on Join Date Field
    const dateInput = document.getElementById('join-date');
    if (dateInput) {
        dateInput.type = 'date';
    }

    // Feature 7: Show Payment Instructions
    function showPaymentInstructions(method) {
        const instructions = {
            mpesa: 'Tuma malipo kupitia Mpesa by YAS kwa namba ya chama: 123456, kiasi: TZS 10,000.',
            airtel: 'Funga Airtel Money, lipa kwa namba ya kampuni 987654.'
        };

        if (instructions[method]) {
            alert(instructions[method]);
        } else {
            alert('Tafadhali chagua njia sahihi ya malipo.');
        }
    }

    // Feature 8: Download Confirmation for .download-button elements
    const downloadLinks = document.querySelectorAll('.download-button');
    downloadLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const confirmDownload = confirm('Je, unataka kupakua faili hii?');
            if (confirmDownload) {
                const fileName = link.getAttribute('href').split('/').pop();
                // Simulate download completion with a delay
                setTimeout(() => {
                    alert('Umeshindwa kupakua: ${fileName}');
                    console.log('Downloaded: ${fileName} at ${new Date().toLocaleString()}');
                    link.textContent = 'Downloaded: ${fileName}';
                    link.style.backgroundColor = '#45a049'; // Indicate success
                    link.removeAttribute('href'); // Disable further clicks (optional)
                }, 1000); // 1-second delay to mimic download
            } else {
                event.preventDefault(); // Cancel download if user declines
            }
    });
});
});
