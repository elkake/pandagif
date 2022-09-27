import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGifs } from '../hooks/useGifs';
import ListOfGif from '../Components/ListOfGif';
import Index from '../Components/TrendingSearch/Index';
import Categories from '../module/Categories';
const POPULAR_GIFS = ['rick', 'Morty', 'Panda', 'Polar'];

function Home() {
  const [keyword, setKeyword] = useState('');
  const navegar = useNavigate();

  const { gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    navegar(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          minLength="1"
          autoComplete="off"
          type="text"
          placeholder="ingrese un dato"
          onChange={handleChange}
        />
        <button>Buscar</button>
      </form>
      <h3>Ultima busqueda</h3>
      <ListOfGif gifs={gifs} />
      <Categories name="Popular Gifs" options={POPULAR_GIFS} />
      <Index />
    </div>
  );
}

export default Home;
