import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/Home';
import AddNewBlog from '../Pages/AddNewBlog/AddNewBlog';
import { getBlogs } from '../services/service';
import i18n from '../Shared/i18n/i18n';


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
            const currentLanguage = i18n.language || 'en';

            return data;
          } catch (error) {
            console.error('Error in loader:', error);
            return { en: [], ar: [] };
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

