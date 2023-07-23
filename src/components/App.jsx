import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout/Layout';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
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
