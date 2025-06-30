// Back to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 3000) { // show backToTopButton
    backToTopButton.style.display = "block"
  }
  else { // Hide BackToTopButton
    backToTopButton.style.display = "none"
  }
}
  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
window.scrollTo(0, 0);
  }
  

  // Slider 
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dots = document.querySelectorAll('.dot');
            
            let currentIndex = 0;
            const slideCount = slides.length;
            let autoSlideInterval;
            
            // Initialize the slider
            function initSlider() {
                updateSlider();
                startAutoSlide();
            }
            
            // Update slider position
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlider();
            }
            
            // Previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlider();
            }
            
            // Start auto sliding
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
            // Stop auto sliding
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }
            
            // Event listeners
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.getAttribute('data-index'));
                    updateSlider();
                    stopAutoSlide();
                    startAutoSlide();
                });
            });
            
            // Pause on hover
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
            
            // Touch events for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, {passive: true});
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, {passive: true});
            
            function handleSwipe() {
                const threshold = 50;
                const difference = touchStartX - touchEndX;
                
                if (difference > threshold) {
                    nextSlide();
                } else if (difference < -threshold) {
                    prevSlide();
                }
            }
            
            // Initialize
            initSlider();
        });
