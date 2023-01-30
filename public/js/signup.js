// js to handle the signup form
const passEl = document.querySelector("#password-signup"); 
const signupEl = document.querySelector('#signup');

const signupHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPass = document.querySelector('#password2').value.trim();


    
    

    if (password !== confirmPass) {
        alert("Passwords do not match");
        return;
    }
    
   

    if (username && email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            alert("Signup successful your are now logged in")
            document.location.replace('/');
        } else {
            
            // alert user to the res body 
            const resBody = await response.json();
            alert("Password must be at least 8 characters long and contain at least one number");
        }
    }   
}
// add event listeners to the form
if (signupEl) {
    signupEl.addEventListener('click', signupHandler);
}    

    
    
