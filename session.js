// Set the session timeout duration in milliseconds (e.g., 30 minutes)
const sessionTimeoutDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

let sessionTimer; // Variable to store the session timeout timer

// Reset the session timer when there is user activity
function resetSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(logout, sessionTimeoutDuration);
}

// Logout function to be called when the session times out
function logout() {
    // Perform logout actions, e.g., redirect to a login page
    alert("Session timed out. You have been logged out.");
    // Redirect to the login page or perform other logout actions
    // window.location.href = "login.html";
}

// Attach event listeners to reset the timer on user activity
document.addEventListener("mousemove", resetSessionTimer);
document.addEventListener("keydown", resetSessionTimer);

// Initialize the session timer
resetSessionTimer();
