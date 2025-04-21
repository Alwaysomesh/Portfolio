document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.1 };

    const onIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    };

    // Check for IntersectionObserver support
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(onIntersect, observerOptions);

        document.querySelectorAll('.skill-category, .experience-item, .education-item, .project-card')
            .forEach((el, index) => {
                el.classList.add('hidden');
                el.style.transitionDelay = `${index * 0.05}s`; // optional stagger effect
                observer.observe(el);
            });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.skill-category, .experience-item, .education-item, .project-card')
            .forEach(el => {
                el.classList.remove('hidden');
                el.classList.add('fade-in-up');
            });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
