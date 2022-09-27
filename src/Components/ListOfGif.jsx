import Gif from './Gif';
import '../style/List.css';
import { useGifs } from '../hooks/useGifs';

function ListOfGif() {
  const { gifs } = useGifs();
  return (
    <div className="list-container">
      {gifs.map(e => (
        <Gif key={e.id} {...e} />
      ))}
    </div>
  );
}

export default ListOfGif;
