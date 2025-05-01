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
        .filter((tag) => tag.length > 0)
        .slice(0, 3)
        .join(',');
}

function formatNumberShort(number) {
    const num = Number(number);
    if (Number.isNaN(num)) {
        return 'N/A';
    }
    if (num >= 1000000) {
        return `${Math.floor(num / 1000000)}M`;
    }
    if (num >= 1000) {
        return `${Math.floor(num / 1000)}K`;
    }
    return String(num);
}

// Create item of gallery
function createGalleryItem({
    largeImageURL: original,
    webformatURL: preview,
    tags,
    likes,
    views,
    comments,
    downloads,
}) {
    const altText = createAltTextFromTags(tags);

    return /* html */ `<li class="gallery-item">
  <a class="gallery-link glightbox" href="${original}">
      <img
          class="gallery-image"
          src="${preview}" 
          alt="${altText}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
              <b>Likes</b>
              ${formatNumberShort(likes)}
          </span>
          <span class="info-item">
              <b>Views</b>
              ${formatNumberShort(views)}
          </span>
          <span class="info-item">
              <b>Comments</b>
              ${formatNumberShort(comments)}
          </span>
          <span class="info-item">
              <b>Downloads</b>
              ${formatNumberShort(downloads)}
          </span>
      </div>
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
    if (!loader) {
        console.error('Loader element not found in the DOM.');
        return;
    }
    loader.classList.add('is-hidden');
}

export function hideLoader() {
    if (!loader) {
        console.error('Loader element not found in the DOM.');
        return;
    }
    loader.classList.add('is-hidden');
}
