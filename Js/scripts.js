// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Fade in sections on scroll
const faders = document.querySelectorAll('.fade-section');

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ----- Date & Time in Footer -----
function updateDateTime() {
    const dtSpan = document.getElementById('datetime');
    if (!dtSpan) return;

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
