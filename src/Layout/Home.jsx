import { Link, useLocation } from 'wouter';
import { useState } from 'react';
const POPULAR_GIFS = ['rick', 'Morty', 'Panda', 'Polar'];

function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  console.log(location);

  const buscarGif = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  return (
    <div>
      <h3>Los gifs mas populares</h3>
      <form action="" onSubmit={buscarGif}>
        <input
          type="text"
          placeholder="ingrese un dato"
          onChange={e => setKeyword(e.target.value)}
        />
        <button>Buscar</button>
      </form>
      <ul>
        {POPULAR_GIFS.map(nombre => (
          <li key={nombre}>
            <Link to={`/search/${nombre}`}>Gifs de {nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
