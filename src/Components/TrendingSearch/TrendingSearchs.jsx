import { useState, useEffect } from 'react';
import Categories from '../../module/Categories';
import getTrendingGif from '../../services/getTrendingGif';

export default function TrendingSearchs() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGif().then(setTrends);
  }, []);

  return (
    <>
      <Categories name="trending" options={trends} />
    </>
  );
}
