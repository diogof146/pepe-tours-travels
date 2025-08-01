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
    container.addEventListener('click', () => toggleFullscreen(container));
  });
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
  function toggleFullscreen(container) {
    const video = container.querySelector('video');
    const wasPlaying = !video.paused;
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
      video.muted = false;
      video.controls = true;
    }
    setTimeout(() => {
      if (wasPlaying && video.paused) {
        video.play();
      }
    }, 100);
  }

  // Slider functionality 
  document.querySelectorAll('.video-slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const pagination = slider.querySelector('.pagination');
    const slideElements = slides.querySelectorAll('.slide');
    const slideCount = slideElements.length;
    let currentSlide = 0;
    let isChangingSlide = false;
    // Clear any existing pagination
    pagination.innerHTML = '';
    // Only create pagination if there's more than one slide
    if (slideCount > 1) {
      // Create pagination dots
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
      }

      // Navigation functions
      function goToSlide(index) {
        if (isChangingSlide) return;

        isChangingSlide = true;
        currentSlide = (index + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updatePagination();

        // Load current slide video if it has data-src
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
      // Button events
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    } else {
      // Hide navigation if only one slide
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

const tourInquirySection = document.getElementById('tour-inquiry-section');
if (tourInquirySection) {
  tourInquirySection.addEventListener('click', function() {
    window.location.href = 'mailto:Pepeprivatetours@gmail.com?subject=Tour Inquiry&body=Hello! I\'m interested in learning more about your Portugal tours. Please send me more information.';
  });
}
