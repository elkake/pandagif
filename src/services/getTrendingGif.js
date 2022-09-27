import settings from './settings';
export default function getTrendingGif() {
  return fetch(`https://api.giphy.com/v1/trending/searches?api_key=${settings}`)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      return data;
    });
}
