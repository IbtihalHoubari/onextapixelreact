import style from './Home.module.css';
import BlogCard from '../../components/HomePage/BlogsCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../../Store/LoaderSlice';
import Pagination from '../../components/HomePage/Pagination/pagination';
import { useLoaderData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Blog = {
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
    console.log('loader Fetched blogs:', blogs);

    const [currentBlogs, setCurrentBlogs] = useState<Blog[]>([]);
    const [totalBlogs, setTotalBlogs] = useState<Blog[]>([]);
    const blogsPerPage = 6;
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                dispatch(showLoader());
                const currentLanguage = i18n.language || 'en';
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


    return (
        <div className={style[`blogs-container`]}>
            {currentBlogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
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
    );
};
export default Home;

