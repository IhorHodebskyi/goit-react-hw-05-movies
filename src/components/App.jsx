import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Layout from './Layout/Layout';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};
