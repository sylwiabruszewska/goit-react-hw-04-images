import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '38106260-22c65560723f63c5e0affa5f7',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

export async function getImages(query, page) {
  try {
    const url = `?${searchParams}&q=${encodeURIComponent(query)}&page=${page}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.error('An error occurred while fetching images:', error);
    throw error;
  }
}
