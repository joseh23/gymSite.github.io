// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for submitting the form!');
    this.reset();
});

// testimonials side

const gallerySlider = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop
    slidesPerView: 1, // Number of slides to display at a time
    spaceBetween: 20, // Space between slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Autoplay delay in milliseconds (3 seconds in this case)
    },
});

// Check if the user has reached the gallery section and start the slider
const gallerySection = document.getElementById('testimonials');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gallerySlider.autoplay.start();
        } else {
            gallerySlider.autoplay.stop();
        }
    });
});

observer.observe(gallerySection);

// signup function visibility 
function signup(){
const sign = document.getElementById('signUp');
sign.style.visibility="visible";

}

// loading button seection


document.addEventListener('DOMContentLoaded', function () {
    const loadingButton = document.getElementById('loading-button');
    const loadingButtonContainer = document.getElementById('loading-button-container');

    // Remove the loading button and show the content when the page has fully loaded.
    window.addEventListener('load', function () {
        loadingButtonContainer.style.display = 'none';
        // You can add additional code to show the rest of your page content here.
        
    });
});

