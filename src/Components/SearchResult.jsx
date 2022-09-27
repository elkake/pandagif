import ListOfGif from './ListOfGif';
import { useRef, useCallback, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import { useGifs } from '../hooks/useGifs';
import { useParams } from 'react-router-dom';
import useNearScreen from '../hooks/useNearScreen';
import '../style/List.css';
import debounce from 'just-debounce-it';
function SearchResult() {
  const { keyword } = useParams();
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // const handleNextPage = () => console.log('next-page');

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prev => prev + 1), 100),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
    console.log(isNearScreen);
  }, [isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 style={{ color: 'red' }}>{keyword}</h3>
          <ListOfGif gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
}

export default SearchResult;
