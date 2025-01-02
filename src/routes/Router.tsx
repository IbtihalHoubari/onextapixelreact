import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/Home';
import AddNewBlog from '../Pages/AddNewBlog/AddNewBlog';
import { getBlogs } from '../services/service';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          try {
              const data = await getBlogs();
              console.log('Fetched blogs:', data);
              return Array.isArray(data.blogs) ? data.blogs : { en: [], ar: [] };  
            } catch (error) {
              console.error('Error in loader:', error);
              return  { en: [], ar: [] };
          }
      },
      },
      {
        path: '/add-blog',
        element: <AddNewBlog />,
      },
    ],
  },
]);

export default router;

