export function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');

    let currentIndex = 0;
    let totalSlides = slides.length;

    function updateSlide() {
        console.log(currentIndex);
        if (currentIndex === 0) {
            track.classList.add('no-transition');
        } else {
            track.classList.remove('no-transition');
        }
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });
}