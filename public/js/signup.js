// js to handle the signup form

const signupHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPass = document.querySelector('#password2').value.trim();
    if (password !== confirmPass) {
        alert("Passwords do not match");
        return;
    }
    if (name && email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/login');
        } else {
            alert("Failed to login");
        }
    }   
}
// add event listeners to the form
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupHandler);
