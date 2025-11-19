document.addEventListener("DOMContentLoaded", () => {

    // --- FADE-IN SECTIONS ---
    const faders = document.querySelectorAll('.fade-section');
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    faders.forEach(fader => appearOnScroll.observe(fader));

    // --- LIVE DATE & TIME ---
    const dateEl = document.getElementById('datestamp');
    const timeEl = document.getElementById('time');

    function updateDateTime() {
        const now = new Date();
        if(dateEl) dateEl.textContent = "Today's Date: " + now.toDateString();

        if(timeEl) {
            let h = String(now.getHours()).padStart(2, "0");
            let m = String(now.getMinutes()).padStart(2, "0");
            let s = String(now.getSeconds()).padStart(2, "0");
            timeEl.textContent = h + ":" + m + ":" + s;
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // --- IMAGE PREVIEW POPUP ---
    const imgPreview = document.getElementById("imgPreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");

    if (imgPreview && previewImg && closePreview) {
        document.querySelectorAll(".previewable").forEach(img => {
            img.addEventListener("click", () => {
                imgPreview.style.display = "flex";
                previewImg.src = img.src;
            });
        });

        closePreview.addEventListener("click", () => {
            imgPreview.style.display = "none";
        });

        imgPreview.addEventListener("click", (e) => {
            if (e.target === imgPreview) imgPreview.style.display = "none";
        });
    }

    // --- HAMBURGER MENU TOGGLE ---
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    if(hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active"); // Animate hamburger to X
            navMenu.classList.toggle("show");     // Show/hide nav menu
        });
    }

});