import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/HomePage';
import AddNewBlog from '../Pages/AddNewBlog/AddNewBlog';
import dataLoader from '../loader/loader';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: dataLoader  
      },
      {
        path: '/add-blog',
        element: <AddNewBlog />,
      },
    ],
  },
]);

export default Router;

