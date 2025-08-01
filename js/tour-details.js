// Tour data object
const tourData = {
  'porto-city-tour': {
    title: 'Porto City Tour',
    subtitle: 'Complete Porto Experience',
    images: [
      'assets/img/portocity1.jpg',
      'assets/img/portocity2.jpg',
      'assets/img/portocity3.jpg',
      'assets/img/portocity4.jpg',
      'assets/img/portocity5.jpg',
      'assets/img/portocity6.jpg'
    ],
    description: 'Immerse yourself in the authentic charm of Porto, Portugal\'s soulful northern capital. Explore the UNESCO-listed Ribeira district, discover magnificent azulejo tiles, taste world-famous port wine, and experience the city\'s vibrant culture and rich maritime heritage.',
    highlights: [
      'UNESCO World Heritage Ribeira district',
      'São Bento Station\'s stunning azulejo tiles',
      'Port wine cellars and tastings',
      'Dom Luis Metal Bridge',
      'Clérigos Tower panoramic city views',
      'Commercial area of Santa Catarina'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Professional guide', 'Port wine tastings', 'Monument entries', 'Traditional lunch'],
    pricing: {
      2: { low: '412', high: '459' },
      3: { low: '460', high: '511' },
      4: { low: '535', high: '595' },
      5: { low: '578', high: '642' },
      6: { low: '621', high: '691' },
      7: { low: '664', high: '738' },
      8: 'contact'
    }
  },
  'douro-valley-tour': {
    title: 'Douro Valley Tour',
    subtitle: 'UNESCO World Heritage Wine Region',
    images: [
      'assets/img/dourovalley1.jpg',
      'assets/img/dourovalley2.jpg',
      'assets/img/dourovalley3.jpg',
      'assets/img/dourovalley4.jpg'
    ],
    description: 'Journey through the breathtaking Douro Valley, a UNESCO World Heritage landscape of terraced vineyards carved into dramatic hillsides. Visit prestigious quintas, taste exceptional wines, and cruise the legendary Douro River through one of the world\'s oldest wine regions.',
    highlights: [
      'UNESCO World Heritage Douro Valley landscapes',
      'Traditional quinta visits with wine tastings',
      'Scenic Douro River cruise',
      'Pinhão train station\'s famous azulejo panels',
      'Traditional regional lunch with valley views',
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Professional guide', 'Wine tastings at 2 quintas', 'River cruise', 'Regional lunch', 'Transportation'],
    pricing: {
      2: { low: '506', high: '563' },
      3: { low: '575', high: '639' },
      4: { low: '678', high: '754' },
      5: { low: '743', high: '826' },
      6: { low: '808', high: '898' },
      7: { low: '871', high: '968' },
      8: 'contact'
    }
  },
  'braga-guimaraes': {
    title: 'Braga Guimarães Tour',
    subtitle: 'Sacred Heritage & Birth of a Nation',
    images: [
      'assets/img/bragaguimaraes1.jpg',
      'assets/img/bragaguimaraes2.jpg',
      'assets/img/bragaguimaraes3.jpg',
      'assets/img/bragaguimaraes4.jpg'
    ],
    description: 'Embark on a journey through Portugal\'s spiritual and historical heart. In Braga, explore the stunning Bom Jesus do Monte sanctuary and the ancient Sé Cathedral. Then discover Guimarães, the birthplace of Portugal, with its perfectly preserved medieval center and imposing castle.',
    highlights: [
      'Bom Jesus do Monte UNESCO site with panoramic views',
      'Braga\'s historic cathedral and charming old town',
      'Guimarães Castle and Palace of the Dukes of Braganza',
      'Medieval streets where Portugal was born',
      'Traditional northern Portuguese cuisine'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Professional guide', 'Transportation', 'Monument entries'],
    pricing: {
      2: { low: '385', high: '428' },
      3: { low: '407', high: '452' },
      4: { low: '451', high: '502' },
      5: { low: '467', high: '520' },
      6: { low: '485', high: '539' },
      7: { low: '501', high: '557' },
      8: 'contact'
    }
  },
  'vinho-verde': {
    title: 'Vinho Verde Tour',
    subtitle: 'Refreshing Wines of Northern Portugal',
    images: [
      'assets/img/vinhoverde1.jpg',
      'assets/img/vinhoverde2.jpg',
      'assets/img/vinhoverde3.jpg'
    ],
    description: 'Discover the unique Vinho Verde region, home to Portugal\'s most refreshing wines. Visit family-owned quintas nestled in lush valleys, taste crisp whites and light reds, and learn about traditional winemaking methods passed down through generations.',
    highlights: [
      'Visit to 2-3 traditional Vinho Verde producers',
      'Guided wine tastings with local varietals',
      'Scenic drive through vineyard landscapes',
      'Meet passionate local winemakers',
      'Traditional regional lunch paired with wines'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Wine tastings', 'Cellar visits', 'Regional lunch', 'Transportation'],
    pricing: {
      2: { low: '556', high: '618' },
      3: { low: '654', high: '727' },
      4: { low: '792', high: '881' },
      5: { low: '887', high: '986' },
      6: { low: '981', high: '1091' },
      7: { low: '1076', high: '1196' },
      8: 'contact'
    }
  },
  'geres-national-park': {
    title: 'Gerês National Park',
    subtitle: 'Portugal\'s Pristine Wilderness',
    images: [
      'assets/img/geresnationalpark1.jpg',
      'assets/img/geresnationalpark2.jpg',
      'assets/img/geresnationalpark3.jpg',
      'assets/img/geresnationalpark4.jpg'
    ],
    description: 'Escape to Portugal\'s only national park, a pristine wilderness of cascading waterfalls, ancient oak forests, and traditional granite villages. Experience the raw beauty of the Peneda-Gerês, where wolves still roam and time seems to stand still.',
    highlights: [
      'Spectacular Tahiti Waterfall and natural pools',
      'Traditional stone villages like Soajo or Lindoso',
      'Ancient Roman roads and milestones',
      'Endemic flora and fauna spotting',
      'Breathtaking mountain panoramas'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Nature guide', 'Park entrance', 'Traditional lunch']
  },
  'santiago-compostela': {
    title: 'Santiago de Compostela',
    subtitle: 'Sacred Pilgrimage to Spain',
    images: [
      'assets/img/santiagocompostela1.jpg',
      'assets/img/santiagocompostela2.jpg',
      'assets/img/santiagocompostela3.jpg'
    ],
    description: 'Cross into Spain to visit one of Christianity\'s most sacred destinations. Explore the magnificent cathedral where St. James is buried, wander through UNESCO-listed medieval streets, and experience the spiritual atmosphere that has drawn pilgrims for over 1,000 years.',
    highlights: [
      'Santiago Cathedral and Portico of Glory',
      'Pilgrims\' Mass ceremony (if available)',
      'Medieval old town UNESCO World Heritage site',
      'Traditional Galician cuisine experience',
      'Santiago\'s vibrant university atmosphere'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Border crossing assistance', 'Cathedral visit', 'Historic center tour', 'Traditional lunch']
  },
  'coimbra-aveiro': {
    title: 'Coimbra Aveiro Tour',
    subtitle: 'University Heritage & Venice of Portugal',
    images: [
      'assets/img/coimbraaveiro1.jpg',
      'assets/img/coimbraaveiro2.jpg',
      'assets/img/coimbraaveiro3.jpg',
      'assets/img/coimbraaveiro4.jpg'
    ],
    description: 'Experience two gems of central Portugal: Coimbra\'s ancient university and Aveiro\'s colorful canals. Walk through halls where Portuguese royalty once studied, then cruise the lagoon aboard traditional moliceiro boats painted with folk art.',
    highlights: [
      'University of Coimbra UNESCO World Heritage site',
      'Stunning Joanina Library with ancient manuscripts',
      'Aveiro\'s Art Nouveau architecture and canals',
      'Traditional moliceiro boat ride',
      'Colorful houses and local ceramics',
      'Portugal dos Pequinitos'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['University guided tour', 'Moliceiro boat trip', 'Monument entries', 'Transportation'],
    pricing: {
      2: { low: '416', high: '463' },
      3: { low: '443', high: '492' },
      4: { low: '493', high: '548' },
      5: { low: '513', high: '570' },
      6: { low: '534', high: '594' },
      7: { low: '554', high: '616' },
      8: 'contact'
    }
  },
  'fatima': {
    title: 'Fátima',
    subtitle: 'Sanctuary of Our Lady of Fátima',
    images: [
      'assets/img/fatima1.jpg',
      'assets/img/fatima2.jpg',
      'assets/img/fatima3.jpg',
      'assets/img/fatima4.jpg'
    ],
    description: 'Visit one of the world\'s most important Catholic pilgrimage sites. Learn about the miraculous apparitions of 1917, explore the impressive basilicas, and experience the profound spiritual atmosphere that draws millions of faithful visitors annually.',
    highlights: [
      'Sanctuary of Our Lady of Fátima',
      'Chapel of Apparitions',
      'Basilica of the Holy Trinity',
      'Houses of the three shepherd children',
      'Valinhos - site of the Angel\'s apparition'
    ],
    duration: 'Half Day (4-5 hours)',
    includes: ['Religious sites tour', 'Transportation', 'Professional guide'],
    pricing: {
      2: { low: '300', high: '334' },
      3: { low: '309', high: '344' },
      4: { low: '333', high: '371' },
      5: { low: '337', high: '375' },
      6: { low: '341', high: '379' },
      7: { low: '345', high: '384' },
      8: 'contact'
    }
  },
  'porto-lisboa': {
    title: 'Porto Lisboa Tour',
    subtitle: 'Grand Tour of Portugal\'s Capitals',
    images: [
      'assets/img/portolisboa1.jpg',
      'assets/img/portolisboa2.jpg',
      'assets/img/portolisboa3.jpg',
      'assets/img/portolisboa4.jpg',
      'assets/img/portocity1.jpg',
      'assets/img/portocity3.jpg'
    ],
    description: 'A comprehensive journey connecting Portugal\'s two magnificent cities. Experience Porto\'s authentic charm and port wine culture, then discover Lisbon\'s cosmopolitan energy and Fado soul. This multi-day adventure showcases the best of Portuguese culture, history, and gastronomy.',
    highlights: [
      'Complete Porto and Lisbon city experiences',
      'Port wine cellars and Fado houses',
      'UNESCO World Heritage sites in both cities',
      'Traditional markets and local cuisine',
      'Scenic route through central Portugal'
    ],
    duration: 'Multi-Day (3-5 days)',
    includes: ['Accommodation options', 'All transportation', 'Professional guides', 'Key monument entries']
  },
  'tomar-coimbra': {
    title: 'Tomar Coimbra',
    subtitle: 'Templars\' Legacy & Academic Glory',
    images: [
      'assets/img/tomarcoimbra1.jpg',
      'assets/img/tomarcoimbra2.jpg',
      'assets/img/tomarcoimbra3.jpg',
      'assets/img/coimbraaveiro2.jpg'
    ],
    description: 'Discover two of Portugal\'s UNESCO World Heritage treasures. Explore the mysterious Convent of Christ in Tomar, built by the Knights Templar, then visit Coimbra\'s ancient university with its breathtaking library and centuries of academic tradition.',
    highlights: [
      'Convent of Christ - Templar stronghold',
      'Tomar\'s charming historic center',
      'University of Coimbra and Joanina Library',
      'Student traditions and academic culture',
      'Two UNESCO World Heritage sites in one day'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['UNESCO sites guided tours', 'Monument entries', 'Transportation', 'Professional guide'],
    pricing: {
      2: { low: '444', high: '493' },
      3: { low: '455', high: '506' },
      4: { low: '490', high: '545' },
      5: { low: '494', high: '549' },
      6: { low: '498', high: '554' },
      7: { low: '502', high: '558' },
      8: 'contact'
    }
  },
  'vila-conde-lima-viana': {
    title: 'Vila do Conde, Ponte de Lima, Viana do Castelo',
    subtitle: 'Northern Portugal\'s Coastal & River Gems',
    images: [
      'assets/img/vilaconde1.jpg',
      'assets/img/vilaconde2.jpg',
      'assets/img/vilaconde3.jpg',
      'assets/img/vilaconde4.jpg',
      'assets/img/vilaconde5.jpg'
    ],
    description: 'Explore three charming towns that showcase northern Portugal\'s maritime heritage and riverside beauty. From Vila do Conde\'s lace-making traditions to Ponte de Lima\'s Roman bridge and Viana do Castelo\'s stunning basilica views.',
    highlights: [
      'Vila do Conde\'s traditional bobbin lace workshops',
      'Ponte de Lima - Portugal\'s oldest town',
      'Viana do Castelo\'s Santa Luzia Basilica',
      'Lima River landscapes and Roman heritage',
      'Traditional Minho architecture and crafts'
    ],
    duration: 'Full Day (8 hours)',
    includes: ['Three historic towns tour', 'Traditional craft demonstrations', 'Transportation', 'Local guide']
  },
  'porto-half-day': {
    title: 'Porto Half Day',
    subtitle: 'Essential Porto Experience',
    images: [
      'assets/img/portocity1.jpg',
      'assets/img/portocity2.jpg',
      'assets/img/portocity3.jpg',
      'assets/img/portocity4.jpg',
      'assets/img/portocity5.jpg',
      'assets/img/portocity6.jpg'

    ],
    description: 'Perfect for cruise passengers or those with limited time. Experience Porto\'s highlights including the historic Ribeira district, iconic azulejo tiles at São Bento Station, and stunning city views from Vila Nova de Gaia\'s port wine cellars.',
    highlights: [
      'Ribeira UNESCO World Heritage district',
      'São Bento Station\'s famous azulejo tiles',
      'Port wine cellar visit and tasting',
      'Panoramic city views from Vila Nova de Gaia',
      'Essential Porto photo opportunities'
    ],
    duration: 'Half Day (4 hours)',
    includes: ['Port wine tasting', 'Historic center walking tour', 'Professional guide', 'Transportation if needed'],
    pricing: {
      2: { low: '315', high: '351' },
      3: { low: '347', high: '386' },
      4: { low: '398', high: '443' },
      5: { low: '427', high: '474' },
      6: { low: '454', high: '505' },
      7: { low: '483', high: '537' },
      8: 'contact'
    }
  }
};

// Get tour parameter from URL
function getTourFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('tour');
}

// Load tour content - only runs if we're on the tour details page
function loadTourContent() {
  // Check if we're on the tour details page by looking for the required elements
  const tourTitle = document.getElementById('tour-title');
  const tourSubtitle = document.getElementById('tour-subtitle');
  const tourImageContainer = document.getElementById('tour-image-container');
  const tourDescription = document.getElementById('tour-description'); // Changed from tour-content
  const tourDetailsContent = document.getElementById('tour-details-content'); // New element
  const pageTitle = document.getElementById('page-title');

  // If these elements don't exist, we're not on the tour details page
  if (!tourTitle || !tourSubtitle || !tourImageContainer || !tourDescription || !tourDetailsContent || !pageTitle) {
    return;
  }

  const tourKey = getTourFromURL();
  const tour = tourData[tourKey];

  if (tour) {
    // Update page content - HEADER SECTION
    tourTitle.textContent = tour.title;
    tourSubtitle.textContent = tour.subtitle;

    // Add only the description to the header section
    tourDescription.innerHTML = `<p class="mb-0">${tour.description}</p>`;

    // Create image slider HTML
    if (tour.images && tour.images.length > 0) {
      if (tour.images.length === 1) {
        // Single image - no slider needed
        tourImageContainer.innerHTML = `<img src="${tour.images[0]}" alt="${tour.title}" class="img-fluid rounded about-heading-img mb-3 mb-lg-0">`;
      } else {
        // Multiple images - create slider
        const slidesHTML = tour.images.map(image =>
          `<div class="slide">
         <img src="${image}" alt="${tour.title}" class="img-fluid rounded about-heading-img">
       </div>`
        ).join('');

        tourImageContainer.innerHTML = `
      <div class="image-slider">
        <div class="slides">
          ${slidesHTML}
        </div>
        <button class="slider-btn prev-btn">‹</button>
        <button class="slider-btn next-btn">›</button>
      </div>`;
      }
    }
    initializeImageSlider();

    // Build highlights list
    const highlightsList = tour.highlights.map(highlight => `<li>${highlight}</li>`).join('');

    // Build the DETAILS content for the lower section
    let detailsHTML = `
      <!-- Side-by-side panels -->
      <div class="row justify-content-center mb-4">
        <div class="col-xl-10">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="bg-faded rounded p-4 h-100">
                <h4 class="mb-3 text-center">Tour Highlights</h4>
                <ul class="mb-0">
                  ${highlightsList}
                </ul>
              </div>
            </div>
            
            <div class="col-lg-6">
              <div class="bg-faded rounded p-4 h-100">
                <h4 class="mb-3 text-center">Tour Details</h4>
                <div class="mb-3">
                  <h6 class="mb-2">Duration</h6>
                  <p class="mb-3">${tour.duration}</p>
                </div>
                <div>
                  <h6 class="mb-2">Includes</h6>
                  <ul class="mb-0">
                    ${tour.includes.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add pricing section if tour has pricing data
    if (tour.pricing) {
      detailsHTML += `
        <!-- Pricing Container -->
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <div class="bg-faded rounded p-4">
              <h4 class="mb-3 text-center">Pricing</h4>
              <div class="pricing-table-container">
                <table class="pricing-table">
                  <thead>
                    <tr class="pricing-header">
                      <th class="pricing-header-cell group-size">Group Size</th>
                      <th class="pricing-header-cell season-price">Low Season</th>
                      <th class="pricing-header-cell season-price">High Season</th>
                    </tr>
                  </thead>
                  <tbody>
        `;

      // Add pricing rows
      for (let people = 2; people <= 8; people++) {
        if (tour.pricing[people]) {
          if (people === 8 && tour.pricing[people] === 'contact') {
            detailsHTML += `
              <tr class="pricing-row">
                <td class="pricing-cell group-size">${people} people</td>
                <td colspan="2" class="pricing-cell contact-cell-full"><a href="mailto:Pepeprivatetours@gmail.com?subject=Tour Inquiry for ${people} people&body=Hello! I'm interested in pricing for the ${tour.title} for ${people} people. Please send me more information." class="plain-link">Contact us</a></td>
              </tr>
            `;
          } else {
            detailsHTML += `
              <tr class="pricing-row">
                <td class="pricing-cell group-size">${people} people</td>
                <td class="pricing-cell season-price">€${tour.pricing[people].low}</td>
                <td class="pricing-cell season-price">€${tour.pricing[people].high}</td>
              </tr>
            `;
          }
        }
      }

      detailsHTML += `
                </tbody>
              </table>
            </div>
            <div class="pricing-seasons-info">
              <strong>Low season:</strong> November, December, January, February, March<br>
              <strong>High season:</strong> April, May, June, July, August, September, October
            </div>
          </div>
        </div>
      `;
    }

    // Update the details content in the lower section
    tourDetailsContent.innerHTML = detailsHTML;

  } else if (tourKey) {
    // Handle invalid tour parameter (only if there was a tour parameter)
    tourTitle.textContent = 'Tour Not Found';
    tourSubtitle.textContent = 'Please Select a Valid Tour';
    tourDescription.innerHTML = `
      <p>The requested tour could not be found. Please return to our <a href="tours.html" class="plain-link">tours page</a> to select from our available experiences.</p>
    `;
    tourDetailsContent.innerHTML = ''; // Clear the details section
  }
}

// Initialize image slider functionality
function initializeImageSlider() {
  document.querySelectorAll('.image-slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const slideElements = slides.querySelectorAll('.slide');
    const slideCount = slideElements.length;
    let currentSlide = 0;
    let isChangingSlide = false;

    if (slideCount > 1) {
      // Navigation functions
      function goToSlide(index) {
        if (isChangingSlide) return;
        isChangingSlide = true;
        currentSlide = (index + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;

        setTimeout(() => {
          isChangingSlide = false;
        }, 500);
      }

      // Button events
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    } else {
      // Hide navigation if only one slide
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadTourContent);
