
import style from './HomePage.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../../Store/LoaderSlice';
import Pagination from '../../components/HomePage/Pagination/pagination';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogsServices from '../../services/blogs-service';
import BlogCard from '../../components/HomePage/blogCard';

type Blog = {
    id: string;
    image: string;
    title: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
};


const Home = () => {
    const { blogs } = useLoaderData() as { blogs: Blog[]; language: string };
    const [currentBlogs, setCurrentBlogs] = useState<Blog[]>([]);
    const [totalBlogs, setTotalBlogs] = useState<Blog[]>([]);
    const blogsPerPage = 6;
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();


    useEffect(() => {
        const getBlogs = async () => {
            try {
                dispatch(showLoader());
                const sortedBlogs = blogs.sort((a, b) => b.id.localeCompare(a.id));
                setTotalBlogs(sortedBlogs); 
                setCurrentBlogs(sortedBlogs.slice(0, blogsPerPage));
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setTimeout(() => {
                    dispatch(hideLoader());
                }, 2000);
            }
        };

        getBlogs();
    }, [blogs, dispatch]);

    useEffect(() => {
        navigate('/', { replace: true });
    }, [i18n.language, navigate]);

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
            const language = i18n.language || 'en';
            const blogsService = new BlogsServices({});
            await blogsService.deleteBlog(language, id);
            const updatedBlogs = totalBlogs.filter((blog) => blog.id !== id);
            setTotalBlogs(updatedBlogs);
            setCurrentBlogs(updatedBlogs.slice(0, blogsPerPage));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <h1 className={style.title}>{t('mainTitle')}</h1>
            <div className={style['blogs-container']}>
                {currentBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                        onEdit={() => editClick(blog)}
                        onDelete={() => deleteClick(blog.id)}
                    />
                ))}
                <div className={style.pages} >
                    <Pagination
                        totalItems={totalBlogs.length}
                        blogsPerPage={blogsPerPage}
                        onPageChange={updateCurrentBlogs}
                    />
                </div>

            </div>
        </div>

    );
};
export default Home;

