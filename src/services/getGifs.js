const KeyAPI = 'JYeSIZAVXJ0kuqzKUIhjS8S9UlkxmIRn';

export default function getGifs({ keyword = 'panda' } = {}) {
  
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${KeyAPI}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  )
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
