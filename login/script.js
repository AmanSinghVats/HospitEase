// Get the forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Add event listeners to the forms
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    // Add your signup logic here
    if (signupPassword === confirmPassword) {
        console.log(`Username: ${signupUsername}, Password: ${signupPassword}`);
    } else {
        alert('Passwords do not match');
    }
});