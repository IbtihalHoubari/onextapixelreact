import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/HomePage';
import AddNewBlog from '../Pages/AddNewBlog/AddNewBlog';
import i18n from '../i18n';
import BlogsServices from '../services/blogs-service';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          try {
            const blogsService = new BlogsServices({});
            const language = i18n.language || 'en';
            const blogs = await blogsService.getBlogs(language);
            return { blogs, language };
          } catch (error) {
            console.error('Error in loader:', error);
            return { blogs: [], language: i18n.language || 'en' };
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

export default Router;

