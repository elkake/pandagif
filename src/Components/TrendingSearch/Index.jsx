import useNearScreen from '../../hooks/useNearScreen';
import { lazy, Suspense } from 'react';
import Spinner from '../../spinner/Spinner';

const TrendingSearchs = lazy(() => import('./TrendingSearchs'));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distancia: '0px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearchs /> : null}
      </Suspense>
    </div>
  );
}
