// for footer copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// for pop-up functionality
const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

items.forEach(item => {
    observer.observe(item);
});
