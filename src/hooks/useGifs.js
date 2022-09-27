import { useContext, useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import GifContext from '../context/GifContext';

const INITIAL_PAGE = 0;
export function useGifs({ keyword } = { keyword: null }) {
  // obtengo gifs[] setgifs fn
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  useEffect(() => {
    setLoading(true);

    // recuperamos la keyword del localstorage
    getGifs({ keyword: keywordToUse }).then(data => {
      setGifs(data);
      setLoading(false);
      // guardamos la keyword en el local storage
      if (keyword != null) {
        localStorage.setItem('lastKeyword', keyword);
      }
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    getGifs({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse, setGifs]);

  return { loading, gifs, loadingNextPage, setPage };
}
