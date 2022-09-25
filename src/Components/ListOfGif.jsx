import Gif from './Gif';
import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Spinner from '../spinner/Spinner';
import '../style/List.css';

function ListOfGif({ params }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { keyword } = params;
  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then(data => {
      setGifs(data);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <Spinner />;
  return (
    <div className="list-container">
      {gifs.map(e => (
        <Gif
          keyword={keyword}
          key={e.id}
          title={e.title}
          id={e.id}
          url={e.url}
        />
      ))}
    </div>
  );
}

export default ListOfGif;
