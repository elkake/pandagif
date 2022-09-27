import ListOfGif from '../Components/ListOfGif';
import Index from '../Components/TrendingSearch/Index';
import Categories from '../module/Categories';
import SearchForm from '../Components/SearchForm';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const POPULAR_GIFS = ['rick', 'Morty', 'Panda', 'Polar'];

function Home() {
  const navegar = useNavigate();

  const handleSubmit = useCallback(
    keyword => {
      navegar(`search/${keyword}`);
    },
    [navegar]
  );

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <h3>Ultima busqueda</h3>
      <ListOfGif />
      <Categories name="Popular Gifs" options={POPULAR_GIFS} />
      <Index />
    </div>
  );
}

export default Home;
