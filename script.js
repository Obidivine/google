// script.js

document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Display user input in an alert (for testing)
  alert(`Email: ${email}\nPassword: ${password}`);
});