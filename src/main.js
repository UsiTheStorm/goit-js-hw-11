import { showErrorToast, showWarningToast } from './js/utilitis/toasts';
import getImagesByQuery from './js/pixbay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchQuery = formData.get('search-text').trim();

    if (!searchQuery) {
        showWarningToast('Please enter a search query.');
        return undefined;
    }

    event.target.reset();
    clearGallery();
    showLoader();

    getImagesByQuery(searchQuery)
        .then((images) => {
            if (!images.length) {
                showWarningToast('No images found for the search query.');
                return undefined;
            }

            hideLoader();
            createGallery(images);

            return undefined;
        })
        .catch((error) => {
            showErrorToast('An error occurred while fetching images.');
            console.error('Error fetching images:', error);
            return undefined;
        })
        .finally(() => {
            hideLoader();
        });
});

// getImagesByQuery('Dog').then((images) => {
//     createGallery(images);
// });
