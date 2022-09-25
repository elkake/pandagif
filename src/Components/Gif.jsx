import '../style/Gif.css';
import '../style/List.css';
import { Link } from 'wouter';

function Gif({ keyword, id, title, url }) {
  return (
    <div className="gif_container">
      <Link to={`/gif/${keyword}/${id}`} className="gif_link">
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}

export default Gif;
