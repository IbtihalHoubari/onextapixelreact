  
import style from './Home.module.css';
import BlogCard from '../../components/BlogsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Shared/Loader/Loader';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { showLoader , hideLoader } from '../../Store/LoaderSlice';
import { RootState } from '../../Store/Store';
import { useLocation } from 'react-router-dom';



type Blog = {
    image: string;
    title: string;
    description: string;
};

const Home = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [currentBlogs, setCurrentBlogs] = useState<Blog[]>([])
    const [pageCount, setPageCount] = useState(0)
    const blogsPerPage = 6;
    const location = useLocation();


    const dispatch = useDispatch();

    
    const GetBlogs = async () => {
        try {        
            dispatch(showLoader());
            const res = await axios.get(`http://localhost:3000/blogs`);
            setBlogs(res.data);
            setPageCount(Math.ceil(res.data.length / blogsPerPage));
            setCurrentBlogs(res.data.slice(0, blogsPerPage));
            
            
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setTimeout(() =>{
                dispatch(hideLoader());

            }, 2000)
        }

    }

    useEffect(() => {
        GetBlogs()
    }, [])

    const handlePageClick = (selectedItem: { selected: number }) => {
        const startIndex = selectedItem.selected * blogsPerPage;
        const endIndex = startIndex + blogsPerPage;
        setCurrentBlogs(blogs.slice(startIndex, endIndex));
    };
    const handleAddBlog = (newBlog: Blog) => {
        const updatedBlogs = [newBlog, ...blogs]; // Add new blog to the start
        setBlogs(updatedBlogs);
        setCurrentBlogs(updatedBlogs.slice(0, blogsPerPage));
        setPageCount(Math.ceil(updatedBlogs.length / blogsPerPage));
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
               <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={style.pagination}
                activeClassName={style.active}
                previousClassName={style.previous}
                nextClassName={style.next}
            /> 
            </div>
            
        </div>
    );
};
export default Home;

