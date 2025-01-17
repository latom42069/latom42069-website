// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation check
    if (username === 'user' && password === 'pass') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'main.html';
    } else {
        message.textContent = 'Invalid username or password';
    }
});
