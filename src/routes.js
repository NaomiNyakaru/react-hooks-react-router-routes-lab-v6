// routes.js
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar'; // Import the NavBar component
import { Fragment } from 'react';

const routes = [
  {
    path: '/',
    element: (
      <Fragment>
        <NavBar />
        <Home />
      </Fragment>
    ),
  },
  {
    path: '/directors',
    element: (
      <Fragment>
        <NavBar />
        <Directors />
      </Fragment>
    ),
  },
  {
    path: '/actors',
    element: (
      <Fragment>
        <NavBar />
        <Actors />
      </Fragment>
    ),
  },
  {
    path: '/movie/:id',
    element: (
      <Fragment>
        <NavBar />
        <Movie />
      </Fragment>
    ),
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default routes;

