document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize Vanta.js Dots Background
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,           // Modern Blue for the network lines
        backgroundColor: 0x050505, // Deep dark background
        points: 12.00,             // Lower number = cleaner, less cluttered look
        maxDistance: 20.00,        // How far lines reach to connect
        spacing: 18.00             // Spreads the nodes out beautifully
    });

    // 2. GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    const fadeElements = gsap.utils.toArray('.fade-up');
    
    fadeElements.forEach((element) => {
        gsap.fromTo(element, 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });
    // 3. Copy to Clipboard Functionality
    
});
function copyEmail() {
        const email = "kavikushi0207@gmail.com";
        
        // Copies the email to the user's clipboard
        navigator.clipboard.writeText(email).then(() => {
            
            const copyText = document.getElementById("copyText");
            const copyIcon = document.getElementById("copyIcon");
            const copyBtn = document.getElementById("copyBtn");

            // Change text and style to show success
            copyText.innerText = "Copied!";
            copyBtn.style.color = "#10b981"; // Emerald green success color
            copyBtn.style.borderColor = "#10b981";
            
            // Change icon to a checkmark
            copyIcon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';

            // Reset the button back to normal after 3 seconds
            setTimeout(() => {
                copyText.innerText = "Copy";
                copyBtn.style.color = ""; // Resets to CSS default
                copyBtn.style.borderColor = "";
                // Reset icon to the copy squares
                copyIcon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
            }, 3000);
            
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
// 4. Initialize Swiper Carousel for Extracurriculars
    const swiper = new Swiper('.extra-swiper', {
        effect: 'coverflow',       // Gives it a premium 3D slide effect
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 'auto',     // Automatically sizes based on the CSS width
        spaceBetween: 30,          // Space between cards
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Adjusts spacing for mobile
            320: { spaceBetween: 20 },
            768: { spaceBetween: 30 }
        }
    });    
// === MOBILE NAVIGATION TOGGLE ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const allNavItems = document.querySelectorAll(".nav-links li a"); // Selects all the links inside

// 1. Toggle the menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// 2. Automatically close the menu when a link is clicked
allNavItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});    