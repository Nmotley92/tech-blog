
//  create a login js file in the public js folder
const loginHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the homepage
            alert("Login successful")
            document.location.replace('/');
        } else {
            const resBody = await response.json();
            alert(resBody.message);
        }
    }   
};
// add event listeners to the form
document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);
    

