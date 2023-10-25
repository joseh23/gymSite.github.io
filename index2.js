// signup DOM manipulation.
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signupSection = document.getElementById('signup');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Prevent the form from submitting in the default way

        // Process the sign-up (e.g., send data to the server, validate, etc.)
        // For simplicity, let's simulate a successful sign-up for demonstration purposes.
        const successfulSignup = true;

        if (successfulSignup) {
            // Reload the page
            location.reload();
        }
    });
});

// rating section.

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            const rating = e.target.getAttribute('data-rating');
            highlightStars(rating);
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
