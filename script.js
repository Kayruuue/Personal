document.addEventListener("DOMContentLoaded", () => {
    // Contact Form Logic
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // Intro Screen and Smooth Scroll to Home Section
    const introScreen = document.getElementById("intro-screen");
    const homeSection = document.getElementById("home");
    const mainContent = document.querySelector('.main-content');
    
    // Function to handle intro screen fade-out and smooth scroll
    const goToHome = () => {
        introScreen.classList.add('fade-out'); // Fade out intro screen
        mainContent.classList.add('fadein'); // Show the home page content
        setTimeout(() => {
            introScreen.style.display = "none"; // Hide intro screen after fade
            homeSection.scrollIntoView({ behavior: "smooth" }); // Scroll to home section
        }, 500); // Matches the fade-out time
    };

    // Event listener for intro screen click
    if (introScreen) {
        introScreen.addEventListener("click", goToHome);
    }

    // Hamburger Menu Toggle (Mobile Navigation)
    // Get the menu icon and nav links
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Toggle the menu visibility when the menu icon is clicked
menuIcon.addEventListener("click", (e) => {
    nav.classList.toggle("active");  // Toggle 'active' class to show/hide nav
});

// Handle nav link clicks (smooth scroll and close the nav)
navLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        // If the menu is open, close it and scroll to the target
        if (nav.classList.contains("active")) {
            // Close the menu
            nav.classList.remove("active");

            // Get the target element and scroll to it
            const targetId = anchor.getAttribute("href").slice(1);  // Get section ID from href
            const targetElement = document.getElementById(targetId);  // Find the target element
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });  // Smooth scroll to the section
            }
        }
    });
});


    // Scroll Handling for Sections with Smooth Scrolling
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false; // Prevent rapid scrolling

    // Determine if the user is on a mobile device
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Adjust scroll speed based on the screen size
    const scrollSpeed = isMobile ? 300 : 100;

    window.addEventListener('wheel', (event) => {
        event.preventDefault();

    // Prevent rapid scrolling
    if (isScrolling) return;

    isScrolling = true;

    // Scroll down
    if (event.deltaY > 0) {
        currentSection = Math.min(sections.length - 1, currentSection + 1);
    }
    // Scroll up
    else {
        currentSection = Math.max(0, currentSection - 1);
    }

    // Smooth scroll to the target section
    sections[currentSection].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Reset the scrolling flag after the transition time
    setTimeout(() => {
        isScrolling = false;
    }, scrollSpeed);
    });

    // Handle touch-based scrolling for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;
    let isTouchScrolling = false; // Prevent rapid touch scrolling

    window.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
    });

    window.addEventListener('touchend', (event) => {
        if (isTouchScrolling) return;

    touchEndY = event.changedTouches[0].clientY;
    const touchDeltaY = touchStartY - touchEndY;

    isTouchScrolling = true;

    // Determine scroll direction based on touch movement
    if (touchDeltaY > 50) { // Scroll down
        currentSection = Math.min(sections.length - 1, currentSection + 1);
    } else if (touchDeltaY < -50) { // Scroll up
        currentSection = Math.max(0, currentSection - 1);
    }

    // Smooth scroll to the target section
    sections[currentSection].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Reset the touch scrolling flag after the transition time
    setTimeout(() => {
        isTouchScrolling = false;
    }, scrollSpeed);
    });


    // Handling active state in projects
    document.querySelectorAll('.project').forEach((project) => {
        project.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.project.active');
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
            }
            project.classList.add('active');
        });

        // Close enlarged project on clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.project')) {
            const activeProject = document.querySelector('.project.active');
            if (activeProject) {
                activeProject.classList.remove('active');
            }
            }
        });
    });

});
