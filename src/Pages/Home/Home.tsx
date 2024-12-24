import style from './Home.module.css';
import BlogCard from '../../components/BlogsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Blog = {
    image: string;
    title: string;
    description: string;
};

const Home = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loader , setLoader] = useState(true)
    const [page, setPage] = useState(1);



    const GetBlogs = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/blogs`);
            setBlogs(res.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoader(false);
        }
        
    }

    useEffect ( () => {
        GetBlogs()
    }, [])

    if (loader) return <p>Loading blogs...</p>;


    return (
        <div className={style[`blogs-container`]}>
            {blogs.map((blog, index) => (
                <BlogCard 
                    key={index} 
                    image={blog.image} 
                    title={blog.title} 
                    description={blog.description} 
                />
            ))}
            <div className={style.pagination}>
                <button 
                    disabled={page === 1} 
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button 
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
  
