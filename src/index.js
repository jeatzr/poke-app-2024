import React from 'react';
import ReactDOM from 'react-dom';
import Search from './screens/Search/Search';
import Main from './screens/Main/Main';
import Error from './screens/Error/Error';
import Details from './screens/Details/Details';
import About from './screens/About/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [{
      path: "/search",
      element: <Search />,
    },
    {
      path: "/about",
      element: <About />
    }
    ],
  },
  {
    path: "/pokemon/:pokemonName",
    element: <Details />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

