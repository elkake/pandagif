import ListOfGif from './ListOfGif';
import { useRef, useCallback, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import { useGifs } from '../hooks/useGifs';
import { useParams } from 'react-router-dom';
import useNearScreen from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import './styles/SearchResult.css';

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
    debounce(() => setPage(prev => prev + 1), 500),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
    console.log(isNearScreen);
  }, [isNearScreen]);

  return (
    <div className="sr_container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="sr_title">{keyword}</h3>
          <div className="sr_result-container">
            <ListOfGif gifs={gifs} />
            <Spinner />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </div>
  );
}

export default SearchResult;
