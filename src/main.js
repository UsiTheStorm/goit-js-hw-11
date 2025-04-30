import { showErrorToast } from './js/utilitis/toasts';

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
