import './styles/Gif.css';
import { Link } from 'react-router-dom';
import { memo } from 'react';

function Gif({ id, title, url }) {
  return (
    <div className="gif_container">
      <Link to={`/gif/${id}`} className="gif_link">
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
}

export default memo(Gif, (prev, next) => {
  return prev.id === next.id;
});
