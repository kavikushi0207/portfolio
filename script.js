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
});