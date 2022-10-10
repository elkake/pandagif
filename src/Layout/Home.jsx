import ListOfGif from '../Components/ListOfGif';
import Index from '../Components/TrendingSearch/Index';
import Categories from '../module/Categories';
import SearchForm from '../Components/SearchForm';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import './Home.css';

import { AiOutlineThunderbolt as Rayo } from 'react-icons/ai';
import {BsStars as Stars} from "react-icons/bs"
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
      <div className="last_search">
        <Rayo className="last_search-ico" />
        <h3 className="last_search-title">Ultima busqueda</h3>
      </div>
      <ListOfGif />
      <div className="last_search">
        <Stars className="last_search-ico" />
        <h3 className="last_search-title">GIFS POPULARES</h3>
      </div>
      <Index />
    </div>
  );
}

export default Home;
