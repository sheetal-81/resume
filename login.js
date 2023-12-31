document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.querySelector('.sign-in .submit');
    var signUpButton = document.querySelector('.sign-up .submit');

    function validateEmail(email) {
        // Regular expression to validate email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        // Password must be at least 6 characters long
        return password.length >= 6;
    }

    function showAlert(message) {
        alert(message);
    }

    signInButton.addEventListener('click', function() {
        var email = document.querySelector('.sign-in input[type="email"]').value;
        var password = document.querySelector('.sign-in input[type="password"]').value;

        if (!email || !password) {
            showAlert('Both email and password are required.');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            showAlert('Password must be at least 6 characters long.');
            return;
        }

        // Save user information in localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        showAlert('Sign In Successful!');
    });

    signUpButton.addEventListener('click', function() {
        var name = document.querySelector('.sign-up input[type="text"]').value;
        var email = document.querySelector('.sign-up input[type="email"]').value;
        var password = document.querySelector('.sign-up input[type="password"]').value;

        if (!name || !email || !password) {
            showAlert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            showAlert('Password must be at least 6 characters long.');
            return;
        }

        // Save user information in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        showAlert('Sign Up Successful!');
    });
});
