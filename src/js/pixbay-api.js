import axios from 'axios';

const API_KEY = '49754838-8d67938118f09bcabafca9026';
const BASE_URL = 'https://pixabay.com/api/';

// Get images by query using api
// Link example: pixabay.com/api/?key=49754838-8d67938118f09bcabafca9026&q=dog&image_type=photo&orientation=horizontal
export default function getImagesByQuery(query) {
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
            },
        })
        .then((response) => response.data.hits)
        .catch((error) => {
            console.error('❌ Failed to fetch images:', error.message);
            throw error;
        });
}
