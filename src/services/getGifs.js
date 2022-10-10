import settings from './settings';
export default function getGifs({
  limit = 20,
  keyword = 'panda',
  page = 0,
} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${settings}&q=${keyword}&limit=${limit}&offset=${
    page * limit + 1
  }&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map(image => {
        const { title, id, images } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
