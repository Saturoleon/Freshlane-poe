// --- Hamburger Menu ---
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("#nav-links, .nav-links"); // support both IDs & classes

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show"); // show/hide menu
            hamburger.classList.toggle("active"); // optional: for animated hamburger
        });
    }

    // --- Fade-in Sections ---
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

    // --- Live Date & Time ---
    const dtSpan = document.getElementById('datetime');
    if (dtSpan) {
        function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            dtSpan.textContent = now.toLocaleString('en-ZA', options);
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }

    // --- Image Enlargement Preview ---
    const imgPreview = document.getElementById("imgPreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");

    if (imgPreview && previewImg && closePreview) {
        document.querySelectorAll(".product img").forEach(img => {
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
});
