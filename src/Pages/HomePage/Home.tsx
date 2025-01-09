import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../../Store/LoaderSlice';
import Pagination from '../../components/HomePage/Pagination/pagination';
import { useLoaderData , useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogsServices from '../../services/blogs-service';

type Blog = {
    id: string;  
    image: string;
    title: string;
    description: string;
};
type Blogs = {
    en: Blog[];
    ar: Blog[];
};

const Home = () => {
    const blogs = useLoaderData() as Blogs;
    const [currentBlogs, setCurrentBlogs] = useState<Blog[]>([]);
    const [totalBlogs, setTotalBlogs] = useState<Blog[]>([]);
    const blogsPerPage = 6;
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                dispatch(showLoader());
                const currentLanguage = (i18n.language as 'en' | 'ar') || 'en';
                const selectedBlogs = blogs[currentLanguage as keyof Blogs] || [];
                setTotalBlogs(selectedBlogs);
                setCurrentBlogs(selectedBlogs.slice(0, blogsPerPage));
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setTimeout(() => {
                    dispatch(hideLoader());
                }, 2000);
            }
        };

        getBlogs();
    }, [blogs, dispatch, i18n.language]);


    const updateCurrentBlogs = (startIndex: number, endIndex: number) => {
        setCurrentBlogs(totalBlogs.slice(startIndex, endIndex));
    };

    const editClick = (blog: Blog) => {
        navigate('/add-blog', {
            state: { blogData: blog } 
        });
    };
    const deleteClick = async (id: string) => {
        try {
          const currentLanguage = i18n.language || 'en';
          await BlogsServices.deleteBlog(id, currentLanguage);
    
          const updatedBlogs = totalBlogs.filter((blog) => blog.id !== id);
          setTotalBlogs(updatedBlogs);
          setCurrentBlogs(updatedBlogs.slice(0, blogsPerPage));
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      };
      
      

    return (
        <div className={style['blogs-container']}>
      {currentBlogs.map((blog, index) => (
        <div key={index} className={style['blogs-card']}>
          <img className={style.image} src={blog.image} alt={blog.title} />
          <h3 className={style.details}>{blog.title}</h3>
          <p className={style.detailsp}>{blog.description}</p>
          <div className={style.icons} >
            <img  className={style.editicon} src="./src/assets/img/edit.svg" onClick={() => editClick(blog)} alt='Edit icon'/>
            <img  className={style.editicon} src="./src/assets/img/trash.svg" onClick={() => deleteClick(blog.id)} alt='Delete icon'/>
          </div>
        </div>
      ))}
    
            <div className={style.pages} >
                <Pagination
                    totalItems={totalBlogs.length}
                    blogsPerPage={blogsPerPage}
                    onPageChange={updateCurrentBlogs}
                />
            </div>

        </div>
    );
};
export default Home;

