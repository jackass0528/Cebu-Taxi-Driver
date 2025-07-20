document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-images img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;
    const totalImages = images.length;

    // Function to update the slider position
    const updateSlider = () => {
        sliderImages.style.transform = `translateX(${-currentIndex * 100}%)`;
        updateDots();
    };

    // Function to create and update dots
    const createDots = () => {
        sliderDotsContainer.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < totalImages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            sliderDotsContainer.appendChild(dot);
        }
        updateDots();
    };

    // Function to update active dot
    const updateDots = () => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Event listener for Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    });

    // Event listener for Previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // + totalImages to handle negative result of modulo
        updateSlider();
    });

    // Initialize dots and slider position
    createDots();
    updateSlider(); // Ensure the first image is displayed correctly on load
});