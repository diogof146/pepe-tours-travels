document.addEventListener('DOMContentLoaded', function() {
  // Lazy loading setup
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const src = video.dataset.src;

        if (src && !video.src) {
          video.src = src;
          video.load();
          videoObserver.unobserve(video);
        }
      }
    });
  }, {
    rootMargin: '50px',
    threshold: 0.1
  });

  // Fullscreen functionality
  document.querySelectorAll('.video-container').forEach(container => {
    container.addEventListener('click', () => {
      const video = container.querySelector('video');
      toggleFullscreen(video);
    });
  });

  // Listen for fullscreen changes and restore video state when exiting
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      document.querySelectorAll('.video-container video').forEach(video => {
        video.muted = true;
        video.controls = false;
        if (!video.paused) {
          video.play();
        }
      });
    }
  });

  function toggleFullscreen(video) {
    const wasPlaying = !video.paused;

    if (document.fullscreenElement) {
      // Exit fullscreen
      document.exitFullscreen();
    } else {
      // Enter fullscreen on video element
      video.requestFullscreen().then(() => {
        video.muted = false;
        video.controls = true;
        if (wasPlaying && video.paused) {
          video.play();
        }
      });
    }
  }

  // Video slider functionality
  document.querySelectorAll('.video-slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const pagination = slider.querySelector('.pagination');
    const slideElements = slides.querySelectorAll('.slide');
    const slideCount = slideElements.length;
    let currentSlide = 0;
    let isChangingSlide = false;

    // Clear existing pagination dots
    pagination.innerHTML = '';

    // Only create navigation if there are multiple slides
    if (slideCount > 1) {
      // Create pagination dots
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
      }

      function goToSlide(index) {
        if (isChangingSlide) return;

        isChangingSlide = true;
        currentSlide = (index + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updatePagination();

        // Lazy load the current slide's video if needed
        const currentSlideElement = slideElements[currentSlide];
        const currentVideo = currentSlideElement.querySelector('video[data-src]');
        if (currentVideo) {
          currentVideo.src = currentVideo.dataset.src;
          currentVideo.removeAttribute('data-src');
          currentVideo.load();
        }

        setTimeout(() => {
          isChangingSlide = false;
        }, 500);
      }

      function updatePagination() {
        pagination.querySelectorAll('.pagination-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === currentSlide);
        });
      }

      // Previous and next button handlers
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    } else {

      // Hide navigation elements if only one slide
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      pagination.style.display = 'none';
    }
  });
});

// Contact functionality
const emailSection = document.getElementById('email-section');
if (emailSection) {
  emailSection.addEventListener('click', function() {
    window.location.href = 'mailto:Pepeprivatetours@gmail.com';
  });
}

const visitUsSection = document.getElementById('visit-us-section');
if (visitUsSection) {
  visitUsSection.addEventListener('click', function() {
    const address = "Rua Luís Vaz de Camões, 55 Mindelo";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  });
}

const whatsappSection = document.getElementById('whatsapp-section');
if (whatsappSection) {
  whatsappSection.addEventListener('click', function() {
    window.open('https://wa.me/351912966363?call=true');
  });
}
