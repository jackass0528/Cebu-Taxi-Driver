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



        
        //Clear-Site-Data: cache

            const express = require('express');
    const app = express();

    app.get('/logout', (req, res) => {
        // ... perform logout operations ...
        res.setHeader('Clear-Site-Data', '"cache"');
        res.send('You have been logged out and cache cleared.');
    });

    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });


     document.addEventListener('DOMContentLoaded', () => {
    const travelForm = document.getElementById('travelForm');
    const confirmationMessage = document.getElementById('confirmation-message');

    travelForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from submitting normally

        // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        // Simple validation logic
        if (new Date(endDate) < new Date(startDate)) {
            alert('Return date cannot be before the departure date.');
            return; // Stop the function if validation fails
        }
        
        // Display a confirmation message
        confirmationMessage.innerHTML = `
            <h3>Booking Confirmed! ✅</h3>
            <p>Thank you, **${name}**! Your trip to **${destination}** from **${startDate}** to **${endDate}** has been booked.</p>
            <p>A confirmation email has been sent to **${email}**.</p>
        `;
        confirmationMessage.classList.remove('hidden');

        // Optional: Reset the form after a short delay
        setTimeout(() => {
            travelForm.reset();
        }, 5000);
    });
});