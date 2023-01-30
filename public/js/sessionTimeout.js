// create a function to check the idle time
const checkIdleTime = () => {
    let idleTime = 0;
  

    // set an interval to increment the idle time
    const idleInterval = setInterval(async () => {
        idleTime = idleTime + 1;
        if (idleTime > 300) { // 30 is an arbitrary value, you can change it to any time in seconds
            // prompt user to log in again if idle time is more than 30 seconds
            alert("You have been idle for more than 5 mins. If you were logged in you have been logged out.");
            clearInterval(idleInterval);
            // logout user
            const response = await fetch(`/api/users/logout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {   // redirect user to homepage

                document.location.replace("/");
            } else {
                return;
            }
        }
    }, 1000);

    // reset the idle time on any user action (e.g. mouse movement, key press)
    document.addEventListener("mousemove", (event) => {
        idleTime = 0;
    });
    document.addEventListener("keypress", (event) => {
        idleTime = 0;
    });
};


// call the checkIdleTime function when the page loads
window.onload = checkIdleTime;
