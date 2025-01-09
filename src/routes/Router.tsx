import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/HomePage';
import AddNewBlog from '../Pages/AddNewBlog/AddNewBlog';
import i18n from '../i18n';
import BlogsServices from '../services/blogs-service';


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
            const data = await BlogsServices.getBlogs();
            console.log('Fetched blogs:', data);
            const currentLanguage = i18n.language || 'en';
            console.log('Fetched blogs Language ' , currentLanguage)
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

