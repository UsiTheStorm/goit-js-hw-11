import { showErrorToast, showWarningToast } from './js/utilitis/toasts';
import getImagesByQuery from './js/pixbay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchQuery = formData.get('search-text');

    if (!searchQuery) {
        showErrorToast('Please enter a search query.');
        return undefined;
    }
});

getImagesByQuery('Dog');
