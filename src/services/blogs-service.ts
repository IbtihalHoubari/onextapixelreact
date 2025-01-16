import { Component } from "react";
import axios from "axios";

interface Blog {
    id: string;
    image: string;
    title: string;
    description: string;
}

interface State {
    blogs: Blog[];
}

class BlogsServices extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            blogs: [],
        };
    }

    getBlogs = async (language: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/${language}`);
            this.setState({ blogs: response.data || [] });
            return response.data || [];
        } catch (error) {
            console.error(`Error fetching blogs for Language (${language}):`, error);
            return [];
        }
    };

    addBlog = async (language: string, data: { image: string; title: string; description: string }) => {
        try {
            const newBlog = {
                id: Date.now().toString(),
                ...data,
            };
            const response = await axios.post(`http://localhost:3000/${language}`, newBlog);
            this.setState((prevState) => ({
                blogs: [...prevState.blogs, response.data],
            }));
        } catch (error) {
            console.error(`Error adding blog for Language (${language}):`, error);
        }
    };

    updateBlog = async (language: string, id: string, data: { image: string; title: string; description: string }) => {
        try {
            await axios.put(`http://localhost:3000/${language}/${id}`, data);
            this.setState((prevState) => ({
                blogs: prevState.blogs.map((blog) =>
                    blog.id === id ? { ...blog, ...data } : blog
                ),
            }));
        } catch (error) {
            console.error(`Error updating blog ${id} for Language (${language}):`, error);
        }
    };

    deleteBlog = async (language: string, id: string) => {
        try {
            await axios.delete(`http://localhost:3000/${language}/${id}`);
            this.setState((prevState) => ({
                blogs: prevState.blogs.filter((blog) => blog.id !== id),
            }));
        } catch (error) {
            console.error(`Error deleting blog ${id} for Language (${language}):`, error);
        }
    };
}

export default BlogsServices;
