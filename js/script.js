// ======================================
// Freshlane JS - Upgraded
// Author: Leon
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section, #hero");

    // ----- Hamburger toggle -----
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    // ----- Smooth scroll -----
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("../index.html", "").replace("#", "");
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
            // Close menu on mobile after click
            navMenu.classList.remove("show");
        });
    });

    // ----- Fade-in on scroll -----
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add("fade-section"); // initial state
        fadeInObserver.observe(section);
    });
});


