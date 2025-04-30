import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Create alt text from tags
function createAltTextFromTags(tags) {
    return tags.split(',').slice(0, 3).join(',');
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
    // console.log(imagesArray);
    if (!gallery) {
        console.error('Gallery element not found in the DOM.');
        return;
    }
    const markup = imagesArray.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {}

// Initialize GLightbox with configuration options
// eslint-disable-next-line no-unused-vars
const lightbox = GLightbox({
    // CSS selector for the gallery links
    selector: '.glightbox',
    // Enable looping through the gallery items
    loop: true,
    // Effect to use when opening the lightbox
    openEffect: 'zoom',
});
