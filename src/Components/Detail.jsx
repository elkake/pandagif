import { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import Context from '../context/StaticContext';
import GifContext from '../context/GifContext';
import Gif from './Gif';
import './styles/Detail.css';

function Detail() {
  const { id } = useParams();
  const { gifs } = useContext(GifContext);

  const gif = gifs.find(e => e.id === id);

  return (
    <div className="dt_container">
      <Gif {...gif} />
    </div>
  );
}

export default Detail;
