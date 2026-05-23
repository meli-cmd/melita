window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const floatingWA = document.querySelector('.floating-wa');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
        if (floatingWA) floatingWA.classList.add('show');
        if (backToTop) backToTop.classList.add('show');
    } else {
        if (floatingWA) floatingWA.classList.remove('show');
        if (backToTop) backToTop.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true, offset: 80 });

    const track = document.querySelector('.marquee-track');
    if(track) {
        const content = track.innerHTML;
        track.innerHTML = content + content; 
    }
    
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
