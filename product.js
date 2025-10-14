//Hero Carousel Animation

let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    setInterval(nextSlide, 5000);
