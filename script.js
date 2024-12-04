// Function to open the sliding panel
function openPanel(panelId) {
    document.getElementById(panelId).classList.add('active');
}

// Function to close the sliding panel
function closePanel(panelId) {
    document.getElementById(panelId).classList.remove('active');
}

// Handle form submissions (optional validation)
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login form submitted');
    closePanel('login-panel');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Register form submitted');
    closePanel('register-panel');
});
