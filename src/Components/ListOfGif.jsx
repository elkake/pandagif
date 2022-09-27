import Gif from './Gif';
import '../style/List.css';

function ListOfGif({ gifs }) {
  return (
    <div className="list-container">
      {gifs.map(e => (
        <Gif key={e.id} {...e} />
      ))}
    </div>
  );
}

export default ListOfGif;
