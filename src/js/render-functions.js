import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const glightboxOptions = {
    selector: '.glightbox', // CSS selector for the gallery links
    loop: true, // Enable looping through the gallery items
    openEffect: 'zoom', // Effect to use when opening the lightbox
};

// Create alt text from tags
function createAltTextFromTags(tags) {
    if (!tags) {
        return 'Gallery image';
    }
    return tags
        .split(',')
        .map((tag) => tag.trim())
        .slice(0, 3)
        .join(',');
}

// Create item of gallery
function createGalleryItem({ largeImageURL: original, webformatURL: preview, tags }) {
    const altText = createAltTextFromTags(tags);

    return /* html */ `<li class="gallery__item">
  <a class="gallery__link glightbox" href="${original}">
      <img
          class="gallery__image"
          src="${preview}" 
          alt="${altText}"
          loading="lazy"
      />
  </a>
  </li>`;
}
// Create gallery
export function createGallery(imagesArray) {
    if (!gallery) {
        console.error('Gallery element not found in the DOM.');
        return;
    }
    const markup = imagesArray.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    GLightbox(glightboxOptions);
}

// Clear gallery
export function clearGallery() {
    gallery.innerHTML = '';
}

// Show/hide loader
export function showLoader() {
    loader.classList.add('is-hidden');
}

export function hideLoader() {
    loader.classList.remove('is-hidden');
}
